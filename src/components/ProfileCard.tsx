import { SkillBadge } from './SkillBadge';
import { LikeButton } from './LikeButton';
import type { Skill } from './SkillBadge';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  aboutText: string;
  skills: Skill[];
  email: string;
};

export const ProfileCard = ({
  name,
  role,
  avatarUrl,
  aboutText,
  skills,
  email,
}: ProfileCardProps) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center gap-6">
      <div className="flex flex-col items-center text-center">
        <img
          src={avatarUrl}
          alt={`Profile photo of ${name}`}
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-50 shadow-md mb-4"
        />
        <h1 className="text-2xl font-extrabold text-slate-800">{name}</h1>
        <p className="text-sm font-medium text-indigo-600 mt-1">{role}</p>
      </div>

      <section id="about" className="text-center text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 w-full">
        <p>{aboutText}</p>
      </section>

      <section id="skills" className="w-full border-t border-gray-100 pt-4">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 text-center">
          Skills
        </h2>
        {skills.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-400 text-center italic">No skills added yet.</p>
        )}
      </section>

      <div className="w-full border-t border-gray-100 pt-4 flex flex-col items-center gap-2">
        <LikeButton />
      </div>

      <section id="contact" className="text-center w-full border-t border-gray-100 pt-4 text-xs text-gray-500">
        <p>
          Reach out:{' '}
          <a href={`mailto:${email}`} className="text-indigo-600 font-semibold hover:underline">
            {email}
          </a>
        </p>
      </section>
    </div>
  );
};