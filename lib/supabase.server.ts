import { createClient } from '@supabase/supabase-js';
import type { Database } from "@/definitions/supabase";

export function supabaseServer() {
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
	const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
	return createClient<Database>(url, anon, { auth: { persistSession: false } });
}
