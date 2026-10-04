import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

export const Header = () => {
  const { likes } = useLikes();

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
      isActive ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'
    }`;

  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center shadow-sm">
      <h1 className="text-xl font-bold text-slate-800">My Portfolio</h1>
      <nav className="flex items-center gap-4">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/skills" className={linkStyle}>Skills</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
        <div className="ml-2 bg-rose-50 border border-rose-200 text-rose-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          ❤️ {likes}
        </div>
      </nav>
    </header>
  );
};