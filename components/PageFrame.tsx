import type {ReactNode} from "react";

interface PageFrameProps {
	children: ReactNode;
}

export default function PageFrame({children}: PageFrameProps) {
	return (
		<div className="mx-auto w-full max-w-6xl bg-white px-4 py-6 shadow-md sm:rounded-2xl sm:px-8 sm:py-10">
			{children}
		</div>
	);
}
