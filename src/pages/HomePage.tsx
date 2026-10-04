import { ProfileCard } from '../components/ProfileCard';
import avatarImg from '/avatar.jpg';
import type { Skill } from '../components/SkillBadge';

const SKILLS_DATA: Skill[] = [
  { id: 1, label: 'HTML5 & CSS3', colorClass: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  { id: 2, label: 'React & TypeScript', colorClass: 'bg-sky-50 text-sky-700 border-sky-100' },
  { id: 3, label: 'Python / Data Analysis', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { id: 4, label: 'Git & GitHub', colorClass: 'bg-amber-50 text-amber-700 border-amber-100' },
];

export const HomePage = () => {
  return (
    <ProfileCard
      name="Досжан Бақытұлы"
      role="Aspiring Web & Software Developer"
      avatarUrl={avatarImg}
      aboutText="Hello! I am an undergraduate Information Technology student at KBTU. I am passionate about building modern web applications, learning software architectures, and mastering full-stack web development."
      skills={SKILLS_DATA}
      email="student@kbtu.kz"
    />
  );
};