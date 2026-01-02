export type OperatorFaq = {
        question: string;
        answer: string;
};

export type OperatorExample = {
        title: string;
        description: string;
};

export type OperatorThreshold = {
        label: string;
        detail: string;
};

export type OperatorLanding = {
        slug: string;
        name: string;
        operatorCode: string;
        intro: string;
        claimUrl: string;
        claimWindow: string;
        railcardNotes: string;
        evidenceChecklist: string[];
        thresholds: OperatorThreshold[];
        examples: OperatorExample[];
        faqs: OperatorFaq[];
};

export const operatorLandingData: OperatorLanding[] = [
        {
                slug: "avanti",
                name: "Avanti West Coast",
                operatorCode: "avanti",
                intro:
                        "Avanti runs long-distance services on the West Coast Main Line. It normally follows the Delay Repay 15 model with bands from 15 minutes and expects clear evidence of the train you intended to board.",
                claimUrl: "https://www.avantiwestcoast.co.uk/help-and-support/delay-repay-compensation",
                claimWindow: "Avanti typically asks for claims within 28 days of travel. Submit promptly with your booking reference and arrival time.",
                railcardNotes: "Railcard discounts do not reduce your eligibility. Enter the price you paid after the discount when estimating.",
                evidenceChecklist: [
                        "Ticket, eTicket, or booking reference showing the Avanti service",
                        "Proof of actual arrival time (journey history, app screenshot, or station board photo)",
                        "Details of any alternative route agreed by staff",
                        "Seat reservation if you had one for the affected train",
                        "Bank details or voucher preference for payment",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "Most Avanti journeys use 15–29, 30–59, 60–119, and 120+ minute bands." },
                        {
                                label: "Ticket coverage",
                                detail: "Singles, returns, and season tickets are usually eligible. Non-Delay Repay products are rare on Avanti but check the claim form.",
                        },
                        {
                                label: "Claim form expectations",
                                detail: "Avanti asks for the origin, destination, planned times, actual arrival, and upload of ticket proof. Keep explanations concise.",
                        },
                ],
                examples: [
                        {
                                title: "30–59 minute delay on a £68 off-peak return",
                                description:
                                        "Using common Delay Repay 15 percentages, 50% is applied to one leg (usually half the return), giving an indicative £17. Always confirm the exact bands on Avanti’s form.",
                        },
                        {
                                title: "15–29 minute delay on a £120 Advance single",
                                description:
                                        "Many Avanti journeys pay from 15 minutes. An illustrative estimate using the calculator would apply the first band to the £120 fare and return an early-stage figure.",
                        },
                        {
                                title: "Season ticket commuter arriving 70 minutes late",
                                description:
                                        "The calculator divides the season price to a per-journey value and applies the 60–119 minute band, mirroring Avanti’s published percentages for typical claims.",
                        },
                ],
                faqs: [
                        {
                                question: "Does Avanti participate in Delay Repay 15?",
                                answer: "Yes. Avanti usually pays from 15 minutes of delay with increasing percentages at 30–59, 60–119, and 120+ minutes, subject to its claim form wording at the time you apply.",
                        },
                        {
                                question: "Can I claim on an Advance ticket?",
                                answer: "Advance tickets are eligible when the booked Avanti service is delayed or cancelled. Provide the reservation or booking reference to show the intended train.",
                        },
                        {
                                question: "How do season tickets work with Avanti claims?",
                                answer: "Season tickets are converted to a per-journey value before the Delay Repay percentage is applied. Include the validity dates and confirm whether the ticket is on a smartcard or app.",
                        },
                        {
                                question: "What if I was told to take another operator?",
                                answer: "Note who gave permission, when, and which service you used. Compensation is still based on the delay to your final destination.",
                        },
                        {
                                question: "How are payments issued?",
                                answer: "Avanti generally offers bank transfer, card refund, or vouchers. Choose the option you prefer when submitting the claim.",
                        },
                        {
                                question: "What if the calculator amount differs from Avanti’s response?",
                                answer: "Use the calculator as guidance only. If Avanti reaches a different figure, check their reasoning and reply with any missing evidence or timing details.",
                        },
                ],
        },
        {
                slug: "northern",
                name: "Northern",
                operatorCode: "northern",
                intro:
                        "Northern covers commuter and regional routes across the North of England and uses Delay Repay 15 for most services. Clear journey details and arrival times help keep claims moving quickly.",
                claimUrl: "https://www.northernrailway.co.uk/customer-help-advice/delay-repay",
                claimWindow: "Northern usually sets a 28-day submission window from the date of travel. Submit sooner if you can, especially when attaching multiple tickets.",
                railcardNotes: "Enter the fare actually paid after railcard discounts. The discount does not reduce eligibility but helps Northern verify the fare.",
                evidenceChecklist: [
                        "Ticket or barcode for the affected service",
                        "Screenshot of live departure boards or journey history showing the delay",
                        "Notes of any acceptance onto other operators",
                        "Proof of delay timing if advised not to travel",
                        "Bank details or voucher preference",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "Northern typically applies 15–29, 30–59, 60–119, and 120+ minute bands in line with Delay Repay 15." },
                        {
                                label: "Season ticket support",
                                detail: "Weekly, monthly, annual, and flexi season tickets are covered. Claims apply to individual incidents with per-journey calculations.",
                        },
                        {
                                label: "Claim form detail",
                                detail: "Northern asks for planned and actual times, origin/destination, ticket type, and supporting images. Keep explanations factual and concise.",
                        },
                ],
                examples: [
                        {
                                title: "Commuter train 22 minutes late on a £6.40 single",
                                description:
                                        "Under Delay Repay 15, the first band would apply to the £6.40 fare. The calculator shows an indicative figure before you open Northern’s form.",
                        },
                        {
                                title: "Return ticket £18 with a 48-minute arrival delay",
                                description:
                                        "Using common percentages, a 30–59 minute delay often pays 50% of a single leg. The calculator illustrates this for Northern when you pre-select the operator.",
                        },
                        {
                                title: "Flexi season ticket with a 75-minute delay",
                                description:
                                        "The calculator divides the flexi price by 16 to reach a per-journey value and applies the 60–119 band typically used by Northern.",
                        },
                ],
                faqs: [
                        {
                                question: "Is Northern part of Delay Repay 15?",
                                answer: "Yes. Northern generally pays from 15 minutes with rising percentages at 30–59, 60–119, and 120+ minutes, subject to its live policy.",
                        },
                        {
                                question: "Do I need proof of the exact train?",
                                answer: "Yes. Attach a screenshot of the timetable or departure board plus your ticket or barcode to show you were on—or intended to be on—the delayed service.",
                        },
                        {
                                question: "Can I claim if I was told not to travel?",
                                answer: "Include the advice you received, when, and from whom. Northern may treat this as a qualifying delay or refund scenario depending on the circumstances.",
                        },
                        {
                                question: "How should I handle split tickets?",
                                answer: "Upload each ticket and explain the full itinerary. Delay is usually measured at the final destination rather than each split point.",
                        },
                        {
                                question: "What happens if Northern disputes the delay length?",
                                answer: "Reply with arrival evidence and a clear timeline. Reference the final arrival time and any staff instructions that affected your route.",
                        },
                        {
                                question: "How quickly are payments made?",
                                answer: "Northern aims to respond within a couple of weeks, but busy periods can take longer. Keep your submission confirmation for reference.",
                        },
                ],
        },
        {
                slug: "lner",
                name: "LNER",
                operatorCode: "lner",
                intro:
                        "LNER runs on the East Coast Main Line and generally follows Delay Repay 15. Reservations are common, so include them when claiming to show the intended service.",
                claimUrl: "https://www.lner.co.uk/customer-service/delay-repay-compensation/",
                claimWindow: "Claims are typically accepted for journeys within the last 28 days. Submit sooner with clear evidence if your trip involved connections.",
                railcardNotes: "Railcard discounts remain eligible; enter the fare you paid after the discount so the estimate aligns with the ticket price.",
                evidenceChecklist: [
                        "Ticket or booking confirmation with seat reservation if applicable",
                        "Proof of actual arrival time, such as app screenshots or board photos",
                        "Details of any alternative route agreed with staff",
                        "Bank details or voucher preference",
                        "Notes on connections if the delay started on another leg",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "15–29, 30–59, 60–119, and 120+ minutes are commonly used on LNER services." },
                        { label: "Long-distance focus", detail: "Many journeys are reserved. Show which train you planned to take if you boarded a different service due to disruption." },
                        { label: "Season tickets", detail: "Season tickets are converted to a per-journey value before compensation is applied, similar to other operators." },
                ],
                examples: [
                        {
                                title: "Reserved Advance £86 arriving 33 minutes late",
                                description:
                                        "Using typical Delay Repay 15 percentages, the 30–59 band would apply to the £86 fare. The calculator provides an indicative amount before you click to claim.",
                        },
                        {
                                title: "Annual season traveller delayed by 65 minutes",
                                description:
                                        "The calculator divides the annual ticket by 464, then applies the 60–119 band often used by LNER for standard Delay Repay claims.",
                        },
                        {
                                title: "Missed connection due to an upstream delay",
                                description:
                                        "Measure the delay at the final destination and explain the chain of events. The calculator can still be used by selecting LNER and the relevant delay band.",
                        },
                ],
                faqs: [
                        {
                                question: "Do I need my seat reservation to claim?",
                                answer: "Including the reservation helps show the exact service you planned to use, which supports your timeline if you boarded a later train.",
                        },
                        {
                                question: "Are First Class tickets treated differently?",
                                answer: "Compensation is still based on the fare paid and the delay band. Provide the First Class ticket or booking reference for clarity.",
                        },
                        {
                                question: "Can I claim for a journey involving another operator?",
                                answer: "If the LNER leg caused the delay, present the whole itinerary and arrival time. Delay Repay is usually based on the final destination delay.",
                        },
                        {
                                question: "Does LNER offer vouchers or cash?",
                                answer: "LNER typically lets you choose between electronic payment and vouchers. Select your preference on the claim form.",
                        },
                        {
                                question: "What if my train was cancelled and I rebooked?",
                                answer: "Explain the change, include both bookings if relevant, and provide the actual arrival time of the service you used.",
                        },
                ],
        },
        {
                slug: "gwr",
                name: "Great Western Railway",
                operatorCode: "gwr",
                intro:
                        "GWR serves the West of England and South Wales and generally follows Delay Repay 15. Claims focus on clear evidence of the journey and the measured delay.",
                claimUrl: "https://www.gwr.com/help-and-support/refunds-and-compensation/delay-repay",
                claimWindow: "GWR usually sets a 28-day window from the date of travel. Submitting early reduces back-and-forth about missing evidence.",
                railcardNotes: "Enter the fare paid after any railcard discounts. The eligibility is unchanged, but the calculator uses the price you paid.",
                evidenceChecklist: [
                        "Ticket, eTicket, or smartcard proof for the GWR service",
                        "Screenshot or photo showing the actual arrival time",
                        "Details of any alternative route or acceptance onto other operators",
                        "Preferred payment method (bank, card refund, or vouchers)",
                        "Notes on any connections that were missed",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "15–29, 30–59, 60–119, and 120+ minute bands are commonly published by GWR for Delay Repay 15." },
                        { label: "Coverage", detail: "Singles, returns, and season tickets are normally eligible; cite the specific service and arrival time in your claim." },
                        { label: "Refunds versus Delay Repay", detail: "If you chose not to travel after a cancellation, a refund may apply instead. State clearly whether you travelled." },
                ],
                examples: [
                        {
                                title: "Off-peak return £42 arriving 55 minutes late",
                                description:
                                        "The calculator applies the 30–59 minute band often used by GWR, producing an indicative amount before you open the GWR form.",
                        },
                        {
                                title: "Advance single £28 delayed by 18 minutes",
                                description:
                                        "Delay Repay 15 usually starts at 15 minutes. Enter the fare and select the first band to see the guidance figure.",
                        },
                        {
                                title: "Weekly season ticket with a 70-minute delay",
                                description:
                                        "The ticket is divided by 10 to reach a per-journey value. The 60–119 minute band then provides an estimate similar to GWR’s published rules.",
                        },
                ],
                faqs: [
                        {
                                question: "Does GWR use Delay Repay 15?",
                                answer: "Yes, most routes follow Delay Repay 15 with payments from 15 minutes of delay. Always check the live claim form wording.",
                        },
                        {
                                question: "Can I claim if I took a different operator on advice?",
                                answer: "Provide details of who advised you, when, and the service taken. Compensation is usually based on the delay to your final destination.",
                        },
                        {
                                question: "How are season tickets handled?",
                                answer: "Season tickets are converted to a per-journey value before the band percentage is applied. Include validity dates and smartcard references if relevant.",
                        },
                        {
                                question: "Are paper and digital tickets treated the same?",
                                answer: "Yes. Upload a clear photo or screenshot either way, along with evidence of the delay.",
                        },
                        {
                                question: "What if my evidence is limited?",
                                answer: "Submit what you have—ticket proof and a clear timeline—and be prepared to respond quickly if GWR requests further detail.",
                        },
                ],
        },
        {
                slug: "thameslink",
                name: "Thameslink",
                operatorCode: "thameslink",
                intro:
                        "Thameslink is part of Govia Thameslink Railway and follows Delay Repay 15 across its cross-London network. Claims benefit from precise timings and station details.",
                claimUrl: "https://www.thameslinkrailway.com/help-and-support/journey-problems/delay-repay-compensation",
                claimWindow: "Claims are generally accepted within 28 days of travel. Keep screenshots from journey planners to demonstrate arrival times.",
                railcardNotes: "Railcard holders should enter the fare after discount. The discount itself does not reduce eligibility for Delay Repay.",
                evidenceChecklist: [
                        "Ticket or barcode for the affected service",
                        "Screenshot of live departure boards or journey history showing delay",
                        "Notes of any acceptance onto other operators during disruption",
                        "Bank details or voucher preference",
                        "Information about step-free routes if relevant to the delay",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "Thameslink applies 15–29, 30–59, 60–119, and 120+ minute bands under Delay Repay 15." },
                        { label: "Metro and commuter focus", detail: "Frequent services mean small delays can still qualify. Record actual arrival time precisely." },
                        { label: "Season tickets", detail: "Weekly, monthly, annual, and flexi products are eligible with per-journey calculations via the calculator." },
                ],
                examples: [
                        {
                                title: "Peak single £7.80 arriving 20 minutes late",
                                description:
                                        "Select Thameslink and the 15–29 minute band in the calculator to see the indicative payout before opening the claim form.",
                        },
                        {
                                title: "Monthly season user delayed 58 minutes",
                                description:
                                        "The calculator divides the monthly price by 40 and applies the 30–59 band Thameslink commonly uses for Delay Repay 15.",
                        },
                        {
                                title: "Connection missed in the core due to disruption",
                                description:
                                        "Measure delay at the final destination and include platform or station details. The calculator provides guidance using Thameslink’s published bands.",
                        },
                ],
                faqs: [
                        {
                                question: "Does Thameslink pay from 15 minutes of delay?",
                                answer: "Yes. Thameslink follows Delay Repay 15 with payments starting at 15 minutes, increasing at higher bands.",
                        },
                        {
                                question: "Can I claim if I was advised not to travel?",
                                answer: "Include the advice, time, and source. Thameslink may provide Delay Repay or direct you to a refund depending on circumstances.",
                        },
                        {
                                question: "Are smartcards accepted as proof?",
                                answer: "Yes. Provide screenshots from your account and any gate or journey history where available, alongside arrival evidence.",
                        },
                        {
                                question: "How do split tickets work on Thameslink?",
                                answer: "Upload each ticket and outline the full itinerary. Delay is usually measured at the final destination rather than each split point.",
                        },
                        {
                                question: "When will I get paid?",
                                answer: "Processing times vary, but many claims are reviewed within a couple of weeks. Keep the confirmation email for reference.",
                        },
                ],
        },
        {
                slug: "southeastern",
                name: "Southeastern",
                operatorCode: "southeastern",
                intro:
                        "Southeastern serves Kent and South East London and uses Delay Repay 15 on most routes. Clear evidence of arrival times helps avoid back-and-forth.",
                claimUrl: "https://www.southeasternrailway.co.uk/contact-us/journey-problems/delay-repay-compensation",
                claimWindow: "Southeastern commonly sets a 28-day window from the journey date. Submit sooner with screenshots if disruption was widespread.",
                railcardNotes: "Use the fare paid after any railcard discount for accurate estimates. Railcards remain eligible for Delay Repay.",
                evidenceChecklist: [
                        "Ticket, smartcard, or eTicket proof",
                        "Screenshot showing the delay or cancellation",
                        "Notes of any advice not to travel or to take an alternative route",
                        "Bank details or voucher preference",
                        "Connection details if the delay compounded across services",
                ],
                thresholds: [
                        { label: "Delay bands", detail: "15–29, 30–59, 60–119, and 120+ minute bands are typically applied under Delay Repay 15." },
                        { label: "Metro and mainline mix", detail: "Short metro hops and longer mainline journeys are both covered; precise times matter for shorter trips." },
                        { label: "Season tickets", detail: "All major season products are eligible with per-journey calculations handled by the calculator." },
                ],
                examples: [
                        {
                                title: "Metro single £5 delayed by 18 minutes",
                                description:
                                        "Select Southeastern and the first band in the calculator to see the indicative amount before you open the claim form.",
                        },
                        {
                                title: "Mainline return £26 arriving 72 minutes late",
                                description:
                                        "Using common Delay Repay 15 percentages, the 60–119 band would apply. The calculator shows a guidance figure for Southeastern.",
                        },
                        {
                                title: "Flexi season with multiple delays",
                                description:
                                        "Each incident is claimed separately. The calculator divides the flexi price by 16 per journey and applies the relevant band for Southeastern.",
                        },
                ],
                faqs: [
                        {
                                question: "Does Southeastern pay from 15 minutes?",
                                answer: "Yes, most routes use Delay Repay 15. Always review the live claim form for any temporary changes during disruption.",
                        },
                        {
                                question: "Can I claim if I stayed at home after advice not to travel?",
                                answer: "Provide the advice details and time. Southeastern may treat this as a qualifying Delay Repay or refund scenario depending on the wording at the time.",
                        },
                        {
                                question: "What if I changed trains due to disruption?",
                                answer: "Explain the alternative route, include times, and upload evidence. Delay is measured at the final destination.",
                        },
                        {
                                question: "Are Railcards accepted?",
                                answer: "Yes. Railcard holders can claim; use the fare paid after the discount when estimating and submitting.",
                        },
                        {
                                question: "How quickly will I hear back?",
                                answer: "Responses often arrive within a couple of weeks, though busy periods may take longer. Keep your confirmation email as proof of submission.",
                        },
                ],
        },
];

export function getOperatorBySlug(slug: string): OperatorLanding | undefined {
        return operatorLandingData.find((op) => op.slug === slug);
}
