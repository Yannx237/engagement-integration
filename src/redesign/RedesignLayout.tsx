import { Outlet } from 'react-router-dom';
import RedesignHeader from './RedesignHeader';
import RedesignFooter from './RedesignFooter';
import './redesign.css';

export default function RedesignLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-800 font-sans antialiased">
      <RedesignHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <RedesignFooter />
    </div>
  );
}
