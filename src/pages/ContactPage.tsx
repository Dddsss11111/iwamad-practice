export const ContactPage = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 max-w-md w-full text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Contact Me</h2>
      <p className="text-slate-600 mb-4">Feel free to reach out via email:</p>
      <a
        href="mailto:student@kbtu.kz"
        className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
      >
        student@kbtu.kz
      </a>
    </div>
  );
};