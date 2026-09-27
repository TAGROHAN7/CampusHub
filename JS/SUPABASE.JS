const SUPABASE_URL = "https://ebmwmgekpfedcwwzvmyk.supabase.co";
const SUPABASE_KEY = "sb_publishable_K1ZLfHc5IsUQHr7cB81Wrg_aUEPmHyR";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
