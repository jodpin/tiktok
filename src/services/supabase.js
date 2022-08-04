import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fdazwomefwrkoqncttsa.supabase.co";
const clientKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkYXp3b21lZndya29xbmN0dHNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1ODE1ODg0NCwiZXhwIjoxOTczNzM0ODQ0fQ.xIw3BMgSokjPoeaYhNnYQB4t0btqKV10yNiy_JfjY0Q";
 
export const supabase = createClient(supabaseUrl, clientKey)