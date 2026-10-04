import { SkillBadge } from '../components/SkillBadge';
import type { Skill } from '../components/SkillBadge';

const SKILLS_DATA: Skill[] = [
  { id: 1, label: 'HTML5 & CSS3', colorClass: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
  { id: 2, label: 'React & TypeScript', colorClass: 'bg-sky-50 text-sky-700 border-sky-100' },
  { id: 3, label: 'Python / Data Analysis', colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  { id: 4, label: 'Git & GitHub', colorClass: 'bg-amber-50 text-amber-700 border-amber-100' },
];

export const SkillsPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">My Skills</h2>
      <div className="flex flex-wrap gap-2">
        {SKILLS_DATA.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};