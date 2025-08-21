export const dynamic = 'force-static';
export const revalidate = false;

import Calculator from '@/components/Calculator';

export default function Page() {
  return (
    <main>
      <h1 style={{ fontSize: 24, margin: '8px 0' }}>Delay Repay Estimator</h1>
      <p style={{ color: '#555', marginBottom: 16 }}>
        Enter ticket price, type, operator, and delay. We’ll estimate compensation and take you to the correct claim form.
      </p>
      <Calculator />
      <p style={{ color: '#777', fontSize: 12, marginTop: 24 }}>
        Estimates only. Final payout is determined by your operator. Season tickets are converted to a per-journey value.
      </p>
    </main>
  );
}
