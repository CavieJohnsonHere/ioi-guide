import L from "@/localization/L";
import Button from "./Button";

export default function HomePage() {
  return (
    <div className="py-10">
      <h1 className="text-5xl font-bold flex gap-3 justify-center dir-ltr">
        <img src="/assets/logo.svg" alt="" className="size-20" />
        <div className="leading-20 bg-clip-text text-white">.guide</div>
      </h1>

      <div className="text-gray-300 w-128 text-center mx-auto mt-5 text-xl">
        <L>hp-desc</L>
      </div>

      <div className="mt-8 flex justify-center gap-5">
        <Button>
          <L>hp-start-learning</L>
        </Button>
        <Button secondary>
          <L>hp-see-whats-up</L>
        </Button>
      </div>
    </div>
  );
}
