import { useState } from 'react';
import { Header } from './Header';
import { SkillBadge } from './SkillBadge';
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
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <main className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6 my-auto flex flex-col items-center gap-6">
      <Header name={name} role={role} avatarUrl={avatarUrl} />

      <section id="about" className="text-center text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 w-full">
        <p>{aboutText}</p>
      </section>

      {/* Вывод списка навыков через .map() с проверкой на пустой массив */}
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

      {/* Кнопка с интерактивным состоянием useState */}
      <div className="w-full border-t border-gray-100 pt-4 flex flex-col items-center gap-2">
        <button
          onClick={handleLike}
          className={`w-full py-2.5 px-4 font-semibold rounded-xl transition-all duration-200 shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
            isLiked
              ? 'bg-rose-600 text-white hover:bg-rose-700'
              : 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isLiked ? '🤍 Liked' : '🖤 Like'}
        </button>
        <span className="text-xs text-gray-500 font-medium">
          Likes count: {likes}
        </span>
      </div>

      <section id="contact" className="text-center w-full border-t border-gray-100 pt-4 text-xs text-gray-500">
        <p>
          Reach out:{' '}
          <a href={`mailto:${email}`} className="text-indigo-600 font-semibold hover:underline">
            {email}
          </a>
        </p>
      </section>
    </main>
  );
};