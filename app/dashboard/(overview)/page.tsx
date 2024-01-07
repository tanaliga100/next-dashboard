import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCardData } from '../../lib/data';
import CardWrapper from '../../ui/dashboard/cards';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import RevenueChart from '../../ui/dashboard/revenue-chart';

export default async function Page() {
  const {
    totalPaidInvoices,
    totalPendingInvoices,
    numberOfCustomers,
    numberOfInvoices,
  } = await fetchCardData();

  // const totalPaidInvoices = 130;
  // const totalPendingInvoices = 150;
  // const numberOfInvoices = 200;
  // const numberOfCustomers = 300;

  return (
    <main>
      <h1> Dashboard Page</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
