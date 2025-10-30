'use client';

import { useEffect, useState } from 'react';

export default function RewardsPage() {
  const [points, setPoints] = useState<number | null>(null);

  useEffect(() => {
    // later we will put a real user id here
    const userId = 'REPLACE_WITH_REAL_USER_ID';
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/rewards/me?userId=${userId}`)
      .then(r => r.json())
      .then(data => {
        setPoints(data.points);
      })
      .catch(() => setPoints(0));
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Your Rewards</h1>
      <p className="text-slate-600">
        Pay ahead to earn more points. 150 points = $15 off.
      </p>
      <div className="bg-white border rounded p-4 w-fit">
        <p className="text-sm text-slate-500">Current points</p>
        <p className="text-3xl font-bold">{points ?? '...'}</p>
      </div>
    </div>
  );
}
