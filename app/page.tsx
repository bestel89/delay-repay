export const dynamic = 'force-static';
export const revalidate = false;

import Calculator from '@/components/Calculator';

export default function Page() {
	return (
		<main>
			<article className={"prose"}>
				<p>
					Use our Delay Repay Calculator to understand how much you could claim back from the relevant rail company for
					a train delay.
				</p>
				<p>Enter ticket price, type, operator, and delay. We’ll estimate compensation and take you to the correct claim
					form</p>
				<Calculator/>
				<p className={'prose-sm'}>
					Estimates only. Final payout is determined by your operator. Season tickets are converted to a per-journey
					value.
				</p>
			</article>
		</main>
	);
}
