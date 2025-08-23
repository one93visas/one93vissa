
"use client";

import { useState } from "react";
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
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface PhoneVerificationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onVerificationSuccess: (phone: string) => void;
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

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    setError(null);
    setIsLoading(true);

    const fullPhoneNumber = `+91${phone}`;

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: fullPhoneNumber,
      });

      if (error) throw error;

      toast({
        title: "OTP Sent!",
        description: "An OTP has been sent to your mobile number.",
      });
      setStep("otp");
    } catch (err: any) {
      setError(err.message || "Failed to send OTP. Please try again.");
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
      const { data, error } = await supabase.auth.verifyOtp({
        phone: fullPhoneNumber,
        token: otp,
        type: "sms",
      });

      if (error) throw error;
      
      // The session object might be in data.session
      if (!data.session) {
        throw new Error("Verification failed. Please check the OTP and try again.");
      }

      onVerificationSuccess(fullPhoneNumber);
      resetState();
    } catch (err: any)      {
      setError(err.error_description || err.message || "Invalid OTP. Please try again.");
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
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Verify & Continue
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
