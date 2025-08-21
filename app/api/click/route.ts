import { NextRequest, NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase.server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
	try {
		const { operator_code, dest_url } = await req.json();
		if (!operator_code || !dest_url) {
			return NextResponse.json({ ok: false }, { status: 400 });
		}
		const supabase = supabaseServer();
		await supabase.from('clicks').insert({
			operator_code,
			dest_url,
			referrer: req.headers.get('referer') ?? null,
		});
		return NextResponse.json({ ok: true });
	} catch {
		// Don’t block UX on logging failures
		return NextResponse.json({ ok: false }, { status: 200 });
	}
}
