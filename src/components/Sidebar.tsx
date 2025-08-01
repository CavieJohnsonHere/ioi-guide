import { useLocation } from "react-router";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const paths = [
    "getting-started",
    "about-combinatorics",
    "rule-of-product",
    "satisfaction",
    "iftheyapoligize",
    "noneed",
    "forfurtheraction",
  ];
  const location = useLocation();

  return (
    <nav>
      {paths.map((v) => (
        <SidebarItem key={v} selected={`/guide/${v}` == location.pathname}>
          {v}
        </SidebarItem>
      ))}
    </nav>
  );
}
