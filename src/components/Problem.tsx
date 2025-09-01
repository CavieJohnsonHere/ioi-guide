type ProblemInfo = {
  titles: string[];
  questions: string[];
  answers: string[];
};

export default function Problem({ titles, questions, answers }: ProblemInfo) {
  
  return (
    <div className="bg-stone-800 p-8 rounded-2xl">
      <div className="text-stone-200 text-center font-bold text-2xl">{titles}</div>
      <p className="text-stone-200 text-center font-bold text-lg">{questions}</p>
    </div>
  );
}
