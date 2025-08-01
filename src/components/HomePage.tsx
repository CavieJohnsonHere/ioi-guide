import Button from "./Button";

export default function HomePage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold flex gap-3 justify-center dir-ltr">
        <img src="/assets/logo.svg" alt="" className="size-16" />
        <div className="leading-16 bg-clip-text text-white">.guide</div>
      </h1>

      <div className="text-gray-300 w-128 text-center mx-auto mt-5">
        The easiest way to learn Combinatorics, made by passionate teachers, for passionate learners.
      </div>

      <div className="mt-4 flex justify-center gap-5">
        <Button>Start Learning</Button>
        <Button secondary>See what's up</Button>
      </div>
    </div>
  );
}
