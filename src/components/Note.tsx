export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-800/20 rounded-e-2xl border-s-4 border-blue-800 flex">
      <div className="p-4 text-blue-300 text-2xl font-bold bg-blue-800/10">
        Note
      </div>
      <div className="flex-grow p-4 [&>p]:!m-0 [&>p]:!indent-0 [&>p]:inline text-white/50">
        <span className="mx-2">{">"}</span>
        {children}
      </div>
    </div>
  );
}
