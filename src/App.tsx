import avatarImg from '/avatar.jpg'; // Импортируем аватарку из папки public[cite: 8]
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { Skill } from './components/SkillBadge';

const SKILLS_DATA: Skill[] = [
  { id: 1, label: 'HTML5 & CSS3', colorClass: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  { id: 2, label: 'React & TypeScript', colorClass: 'bg-sky-50 text-sky-700 border-sky-100' },
  { id: 3, label: 'Python / Data Analysis', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { id: 4, label: 'Git & GitHub', colorClass: 'bg-amber-50 text-amber-700 border-amber-100' },
];

export function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col justify-between items-center p-4 font-sans text-gray-800">
      <ProfileCard
        name="Досжан Бақытұлы"
        role="Aspiring Web & Software Developer"
        avatarUrl={avatarImg} // Передаем импортированную картинку[cite: 8]
        aboutText="Hello! I am an undergraduate Information Technology student at KBTU. I am passionate about building modern web applications, learning software architectures, and mastering full-stack web development."
        skills={SKILLS_DATA}
        email="student@kbtu.kz"
      />
      <Footer year={2026} author="Doszhan Bakytuly" />
    </div>
  );
}

export default App;