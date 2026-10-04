import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50">
      <Header />
      <main className="flex-1 flex justify-center items-center p-6">
        <Outlet />
      </main>
      <Footer year={2026} author="Doszhan Bakytuly" />
    </div>
  );
};