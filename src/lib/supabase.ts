
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cduakbljbpehctpanutg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkdWFrYmxqYnBlaGN0cGFudXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MzU4ODgsImV4cCI6MjA3MTUxMTg4OH0.SlWSomoZQxIBQkCij9lJ7XNplglF6bl3wrej2_167Ok";

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and Anon Key must be defined");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
