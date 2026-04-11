import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kwgddrdykzcspwqfynet.supabase.co";
const supabaseAnonKey = "PUNE_AICI_CHEIA_TA_PUBLICA_SUPABASE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);