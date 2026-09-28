export type Skill = {
  id: number;
  label: string;
  colorClass: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <span className={`px-3 py-1 rounded-full border text-xs font-medium ${skill.colorClass}`}>
      {skill.label}
    </span>
  );
};