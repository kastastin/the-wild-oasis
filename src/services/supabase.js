import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ngwctajdniaxzgssivrb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nd2N0YWpkbmlheHpnc3NpdnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2MDc0MTAsImV4cCI6MjAxOTE4MzQxMH0.yiOW6biP6CcIUJM4xgzGj0mq8Tx-QXQGKxforpkWWu4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
