type HeaderProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

export const Header = ({ name, role, avatarUrl }: HeaderProps) => {
  return (
    <header className="text-center">
      <img
        src={avatarUrl}
        alt={`Profile photo of ${name}`}
        className="w-28 h-28 rounded-full mx-auto mb-3 object-cover ring-4 ring-indigo-50 shadow-md"
      />
      <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
      <p className="text-sm font-medium text-indigo-600 mt-1">{role}</p>
    </header>
  );
};