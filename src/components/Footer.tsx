type FooterProps = {
  year: number;
  author: string;
};

export const Footer = ({ year, author }: FooterProps) => {
  return (
    <footer className="text-xs text-gray-400 py-4 text-center">
      <p>&copy; {year} {author}. All rights reserved.</p>
    </footer>
  );
};