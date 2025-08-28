import type {Metadata} from "next";
import Calculator from "@/components/Calculator";

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
	title: 'Delay Repay Estimator',
	description: 'Estimate UK train delay compensation and jump to the claim page.',
	alternates: {canonical: '/'},
};

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
			</article>
		</main>
	);
}
