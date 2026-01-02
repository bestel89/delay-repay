import Link from "next/link";

type Props = {
        variant?: "default" | "northern";
};

export default function CalculatorCallout({ variant = "default" }: Props) {
        return (
                <div className="alert bg-blue-50 text-slate-900 shadow-sm">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between w-full">
                                <div className="space-y-1 text-sm md:text-base">
                                        <p className="m-0">
                                                Use our{" "}
                                                <Link className="font-semibold text-blue-800 underline" href="/">
                                                        delay repay calculator
                                                </Link>{" "}
                                                and{" "}
                                                <Link className="font-semibold text-blue-800 underline" href="/">
                                                        train delay calculator
                                                </Link>{" "}
                                                for a quick, operator-aware estimate before you submit your claim.
                                        </p>
                                        {variant === "northern" ? (
                                                <p className="m-0">
                                                        For Northern passengers, the{" "}
                                                        <Link className="font-semibold text-blue-800 underline" href="/operators/northern">
                                                                northern rail delay repay calculator
                                                        </Link>{" "}
                                                        also lets you jump straight to the correct settings with the operator pre-selected.
                                                </p>
                                        ) : null}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                        <Link className="btn btn-primary btn-sm md:btn-md" href="/">
                                                Open calculator
                                        </Link>
                                        {variant === "northern" ? (
                                                <Link className="btn btn-outline btn-sm md:btn-md" href="/?operator=northern">
                                                        Northern pre-selected
                                                </Link>
                                        ) : (
                                                <Link className="btn btn-outline btn-sm md:btn-md" href="/?operator=avanti">
                                                        Pre-select an operator
                                                </Link>
                                        )}
                                </div>
                        </div>
                </div>
        );
}
