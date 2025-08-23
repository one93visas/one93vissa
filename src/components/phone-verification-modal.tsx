
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";

interface PhoneVerificationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onVerificationSuccess: (phone: string) => void;
}

// Helper to correctly type window for recaptchaVerifier
declare global {
    interface Window {
        recaptchaVerifier?: RecaptchaVerifier;
        confirmationResult?: ConfirmationResult;
    }
}

export function PhoneVerificationModal({
  isOpen,
  onOpenChange,
  onVerificationSuccess,
}: PhoneVerificationModalProps) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && step === 'phone') {
      try {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
              'size': 'invisible',
              'callback': (response: any) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
              }
            });
            window.recaptchaVerifier.render();
        }
      } catch (e) {
          console.error("Recaptcha Verifier error:", e);
          setError("Could not initialize verification. Please refresh the page.");
      }
    }
  }, [isOpen, step]);

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setError(null);
    setIsLoading(true);

    const fullPhoneNumber = `+91${phone}`;
    
    if (!window.recaptchaVerifier) {
        setError("Recaptcha not initialized. Please refresh and try again.");
        setIsLoading(false);
        return;
    }
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier);
      window.confirmationResult = confirmationResult;
      
      toast({
        title: "OTP Sent!",
        description: "An OTP has been sent to your mobile number.",
      });
      setStep("otp");
    } catch (err: any) {
      console.error("Firebase OTP Error:", err);
      // Provide a more user-friendly error message
      if (err.code === 'auth/invalid-phone-number') {
        setError("The phone number is not valid. Please check and try again.");
      } else if (err.code === 'auth/too-many-requests') {
        setError("Too many requests. Please try again later.");
      } else {
        setError("Failed to send OTP. Please check your domain settings in Google Cloud Console.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    setError(null);
    setIsLoading(true);

    const fullPhoneNumber = `+91${phone}`;
    
    try {
        if (!window.confirmationResult) {
            throw new Error("Confirmation result not found. Please try sending the OTP again.");
        }
      const result = await window.confirmationResult.confirm(otp);

      if (!result.user) {
        throw new Error("Verification failed. Please check the OTP and try again.");
      }
      
      onVerificationSuccess(fullPhoneNumber);
      resetState();

    } catch (err: any) {
      console.error("Firebase Verify Error:", err);
      setError(err.message || "Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetState = () => {
      setPhone("");
      setOtp("");
      setStep("phone");
      setError(null);
      setIsLoading(false);
      // Clean up reCAPTCHA widget
      if (window.recaptchaVerifier) {
          const recaptchaContainer = document.getElementById('recaptcha-container');
          if (recaptchaContainer) {
              recaptchaContainer.innerHTML = '';
          }
          window.recaptchaVerifier.clear();
          window.recaptchaVerifier = undefined;
      }
  }

  const handleModalOpenChange = (open: boolean) => {
    if (!open) {
        resetState();
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-primary" style={{color: "#1946e6"}}>
            Verify Your Phone Number
          </DialogTitle>
          <DialogDescription>
            {step === "phone"
              ? "Please enter your 10-digit mobile number to continue. We'll send you an OTP."
              : "An OTP has been sent to your number. Please enter it below."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div id="recaptcha-container"></div>
          {error && (
            <p className="text-sm font-medium text-destructive">{error}</p>
          )}

          {step === "phone" ? (
            <div className="flex items-center space-x-2">
                <Input
                    id="country-code"
                    value="+91"
                    className="w-16 bg-muted text-center"
                    readOnly
                />
                <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    placeholder="Mobile Number"
                    maxLength={10}
                    disabled={isLoading}
                />
            </div>
          ) : (
            <Input
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="6-digit OTP"
              maxLength={6}
              disabled={isLoading}
            />
          )}
        </div>
        <DialogFooter>
          {step === "phone" ? (
            <Button onClick={handleSendOtp} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Get OTP
            </Button>
          ) : (
            <Button onClick={handleVerifyOtp} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate--spin" />}
              Verify & Continue
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
