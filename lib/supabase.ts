import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kwgddrdykzcspwqfynet.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3Z2RkcmR5a3pjc3B3cWZ5bmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1ODUxMjUsImV4cCI6MjA5MTE2MTEyNX0.VPxI-rK0FUcTyHeyCZevS30DJz9cI2BteQGVcplwpOs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);