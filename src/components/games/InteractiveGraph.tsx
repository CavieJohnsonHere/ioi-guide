export default function InteractiveGraph() {
  return (
    <div className="flex">
      <div className="w-20 flex flex-col justify-around text-gray-200">
        <div>Hello</div>
      </div>
      <div className="w-20 flex flex-col justify-center text-gray-200 relative">
        <div className="h-2">
          <div className="border border-white -rotate-4"></div>
        </div>
        <div className="h-2">
          <div className="border border-white rotate-4"></div>
        </div>
      </div>
      <div className="w-20 flex flex-col justify-around text-gray-200">
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  );
}