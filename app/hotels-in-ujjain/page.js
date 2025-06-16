import { Suspense } from 'react';
import {Hotels} from './Hotels';

export default function HotelsPage() {
  return (
    <Suspense fallback={<div>Loading tours...</div>}>
      <Hotels />
    </Suspense>
  );
}