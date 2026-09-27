import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iwmmddgxhcczgoogujxw.supabase.co";

const supabaseKey = "sb_publishable_-nxFAs2OoAjs0CM4OBV_3w_GmvCevBa";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);