import { useLikes } from '../context/LikesContext';

export const LikeButton = () => {
  const { likes, addLike } = useLikes();

  return (
    <button
      onClick={addLike}
      className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition flex items-center justify-center gap-2 border border-slate-200"
    >
      <span>❤️ Like</span>
      <span className="bg-slate-200 px-2 py-0.5 rounded-full text-xs font-bold text-slate-800">
        {likes}
      </span>
    </button>
  );
};