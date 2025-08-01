export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-pink-900 hover:[&>div]:-translate-y-1 rounded-2xl text-white outline-offset-4">
      <div className="bg-pink-700 transition-all p-2 px-8 rounded-2xl -translate-y-0.5 active:!translate-0">
        {children}
      </div>
    </button>
  );
}
