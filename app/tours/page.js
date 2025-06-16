import { Suspense } from 'react';
import Tours from './Tours';

export default function ToursPage() {
  return (
    <Suspense fallback={<div>Loading tours...</div>}>
      <Tours />
    </Suspense>
  );
}
