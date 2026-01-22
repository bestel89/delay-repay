import type { Metadata } from "next";
import Link from "next/link";
import { routes } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Delay Repay in London | Contactless, cancellations & common edge cases",
  description:
    "How Delay Repay works in London with contactless/Oyster, rerouting, changing stations, walking, and multiple operators — plus the edge cases that catch commuters out.",
  alternates: { canonical: "/delay-repay-london" },
};

export default function DelayRepayLondonPage() {
  return (
    <article className="prose max-w-none">
      <h1>Delay Repay in London: the nuances most commuters miss</h1>
      <p>
        London travel doesn’t behave like the rest of the UK rail network. Multiple
        operators, overlapping routes, contactless fares, and constant disruption mean
        Delay Repay often <em>feels</em> inconsistent — and in many cases, it is.
      </p>
      <p>
        This guide explains where Delay Repay <strong>does</strong> apply in London,
        where it <strong>usually doesn’t</strong>, and the common edge-cases that trip
        people up.
      </p>

      <h2>1. Delay Repay is based on <em>the journey you actually made</em></h2>
      <p>
        This is the single most important rule — and the one most London commuters
        misunderstand.
      </p>
      <p>Delay Repay compares:</p>
      <ul>
        <li>Your <strong>planned arrival time at a destination station</strong>, vs</li>
        <li>Your <strong>actual arrival time at that same destination station</strong></li>
      </ul>
      <p>Crucially:</p>
      <ul>
        <li>It is <strong>not</strong> based on where you intended to start if you didn’t travel from there</li>
        <li>It is <strong>not</strong> based on when you arrived somewhere after walking, cycling, or getting a bus</li>
        <li>It is <strong>not</strong> based on inconvenience or effort</li>
      </ul>
      <p>
        Once you change your route, origin, or destination, the original plan usually stops
        mattering.
      </p>

      <h2>2. Contactless travel narrows your options</h2>
      <p>
        Using contactless (or Oyster) makes Delay Repay stricter than paper or Advance
        tickets.
      </p>
      <p>With contactless:</p>
      <ul>
        <li>There is no booked train</li>
        <li>There is no fixed itinerary</li>
        <li>There is often no clear “intended train” to benchmark against</li>
      </ul>
      <p>As a result, operators assess claims based on:</p>
      <ul>
        <li>The <strong>stations you actually tapped in and out of</strong></li>
        <li>The <strong>scheduled services between those stations</strong></li>
      </ul>
      <p>If your taps don’t clearly show a delayed journey, the claim will usually fail.</p>

      <h2>3. Changing stations often kills a claim</h2>
      <p>A very common London scenario:</p>
      <blockquote>
        <p>
          “My train from Station A was cancelled, so I walked to Station B and went from
          there instead.”
        </p>
      </blockquote>
      <p>In most cases:</p>
      <ul>
        <li>Delay Repay will be assessed <strong>from Station B</strong>, not Station A</li>
        <li>The cancellation at Station A is treated as irrelevant</li>
        <li>Only delays <em>after</em> starting from Station B count</li>
      </ul>
      <p>Even if:</p>
      <ul>
        <li>Station A and B are close together</li>
        <li>Both are reasonable origins for the same journey</li>
        <li>The decision saved time overall</li>
      </ul>
      <p>
        From a Delay Repay perspective, you abandoned the disrupted journey and started a
        new one.
      </p>

      <h2>4. Walking breaks the delay clock</h2>
      <p>Delay Repay only measures rail time.</p>
      <p>If you:</p>
      <ul>
        <li>Get off early and walk</li>
        <li>Walk between stations</li>
        <li>Walk the final leg instead of waiting</li>
      </ul>
      <p>That walking time <strong>does not count</strong> as delay.</p>
      <p>Claims are assessed based on:</p>
      <ul>
        <li>Actual arrival at the <strong>final station you used</strong></li>
        <li>Not the place you eventually reached on foot</li>
      </ul>
      <p>This catches out a lot of London travellers who optimise their route during disruption.</p>

      <h2>5. Multiple operators = fragmented responsibility</h2>
      <p>London journeys often involve:</p>
      <ul>
        <li>National Rail operators</li>
        <li>TfL-run services</li>
        <li>Interchange between both</li>
      </ul>
      <p>
        Delay Repay responsibility normally sits with <strong>the operator that caused the delay</strong>,
        but:
      </p>
      <ul>
        <li>Operators only compensate for delays on <strong>their services</strong></li>
        <li>They don’t usually compensate knock-on effects caused by another operator</li>
      </ul>
      <p>
        If disruption spans operators, claims are more likely to be rejected unless the delay
        is clearly attributable to one company.
      </p>

      <h2>6. When Delay Repay <em>can</em> still work in London</h2>
      <p>You’re on stronger ground if:</p>
      <ul>
        <li>You stayed within the <strong>same origin and destination stations</strong></li>
        <li>You took the <strong>next available train</strong> after disruption</li>
        <li>You didn’t change stations</li>
        <li>Your delay is clearly <strong>30+ minutes</strong> at the final station</li>
        <li>You can clearly evidence taps and timing</li>
      </ul>
      <p>Even then, expect stricter scrutiny than on long-distance tickets.</p>

      <h2>7. Discretion exists — but don’t rely on it</h2>
      <p>Some operators will occasionally approve claims where:</p>
      <ul>
        <li>You acted reasonably during disruption</li>
        <li>You avoided a much longer delay</li>
        <li>Your alternative route was clearly linked to the original cancellation</li>
      </ul>
      <p>This is <strong>discretionary</strong>, not guaranteed, and varies by operator and reviewer.</p>
      <p>If you claim in these cases:</p>
      <ul>
        <li>Be factual</li>
        <li>Keep it short</li>
        <li>Explain the decision clearly</li>
        <li>Don’t argue fairness — argue causation</li>
      </ul>

      <h2>8. The uncomfortable truth</h2>
      <p>Delay Repay is not designed for:</p>
      <ul>
        <li>Dense urban networks</li>
        <li>Flexible routing</li>
        <li>Smart, adaptive travel decisions</li>
      </ul>
      <p>It is designed for:</p>
      <ul>
        <li>Fixed journeys</li>
        <li>Fixed stations</li>
        <li>Measurable rail delays</li>
      </ul>
      <p>
        In London, the more intelligently you reroute, the more likely you are to lose
        eligibility.
      </p>

      <h2>Final takeaway</h2>
      <p>If Delay Repay matters to you:</p>
      <ul>
        <li>Stick to the same stations</li>
        <li>Stay on rail until the end</li>
        <li>Take the next available service</li>
        <li>Don’t optimise unless the time saving is worth losing compensation</li>
      </ul>
      <p>It’s counterintuitive — but it’s how the system actually works.</p>

      <h2>Related guides</h2>
      <ul>
        <li>
          <Link href={routes.delayRepayExplained}>Delay Repay explained</Link>
        </li>
        <li>
          <Link href={routes.delayRepayMissedConnections}>missed connections</Link>
        </li>
        <li>
          <Link href={routes.delayRepayClaimTimeLimits}>claim time limits</Link>
        </li>
        <li>
          <Link href={routes.delayRepaySeasonTickets}>season tickets</Link>
        </li>
        <li>
          <Link href={routes.delayRepayCancelledTrains}>cancelled trains</Link>
        </li>
      </ul>
    </article>
  );
}
