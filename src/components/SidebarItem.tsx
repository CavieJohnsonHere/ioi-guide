import L from "@/localization/L";
import { Link } from "react-router";

export default function SidebarItem({
  selected,
  children,
}: {
  selected?: boolean;
  children: string;
}) {
  return (
    <Link to={`guide/${children}`}>
      <div
        className={`h-16 hover:[&>div]:bg-stone-800 p-2 text-stone-200 text-xl cursor-pointer transition ${
          selected ? "bg-stone-800 hover:text-white" : ""
        }`}
      >
        <div
          className={`h-full w-full rounded-2xl flex items-center px-4 transition ${
            selected ? "text-white" : ""
          }`}
        >
          <L>{`page-${children}`}</L>
        </div>
      </div>
    </Link>
  );
}
