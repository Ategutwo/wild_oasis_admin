import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ivscmusvnktkwnbezjwp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2c2NtdXN2bmt0a3duYmV6andwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwNTYwNjQsImV4cCI6MjA0NzYzMjA2NH0.aoH1HkH5xRzjmm0rVn7EP5qxqpuhchpc9vc5Zq1n0yA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
