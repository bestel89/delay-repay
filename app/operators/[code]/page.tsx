// app/operators/[code]/page.tsx
// ❌ export const runtime = 'edge';
export const revalidate = 86400; // ISR every 24h

import { notFound } from 'next/navigation';
import { supabaseServer } from '@/lib/supabase.server';

type Props = { params: { code: string } };

export async function generateStaticParams() {
	const supabase = supabaseServer();
	const { data } = await supabase.from('operators').select('code').eq('active', true);
	return (data ?? []).map(o => ({ code: o.code }));
}

export default async function OperatorPage({ params }: Props) {
	const supabase = supabaseServer();
	const { data: op } = await supabase
		.from('operators')
		.select('name, claim_url, code')
		.eq('code', params.code)
		.maybeSingle();

	if (!op) return notFound();

	return (
		<main>
			<h1>{op.name} — Delay Repay</h1>
			<p>Use the calculator on the home page to estimate compensation.</p>
			<p><a href={op.claim_url} target="_blank" rel="nofollow sponsored noopener">
				Go to {op.name} claim page
			</a></p>
		</main>
	);
}
