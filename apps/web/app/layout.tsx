import './globals.css';

export const metadata = {
  title: 'Find My Fades',
  description: 'Find barbers near you and pay ahead.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <h1 className="text-xl font-bold">Find My Fades</h1>
          <div className="flex gap-3">
            <a href="/discover" className="text-sm font-medium">Discover</a>
            <a href="/nearby" className="text-sm font-medium">Nearby</a>
            <a href="/reels" className="text-sm font-medium">Reels</a>
            <a href="/rewards" className="text-sm font-medium">Rewards</a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
