import { Link } from "react-router";

export default function Button({
  children,
  className,
  link,
  secondary,
  icon,
  square,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  link?: string;
  secondary?: boolean;
  icon?: boolean;
  square?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const primaryClasses = [
    `bg-pink-900 hover:[&>div]:-translate-y-1.5 ${
      icon || square ? "aspect-square rounded-full" : "rounded-2xl"
    } text-white outline-offset-4 cursor-pointer ${className}`,
    `bg-pink-700 transition-all ${
      icon || square ? "aspect-square flex justify-center items-center rounded-full" : "p-2 px-8 rounded-2xl"
    } -translate-y-1 active:!translate-0 cursor-pointer ${className}`,
  ];

  const secondaryClasses = [
    `bg-gray-800 hover:[&>div]:-translate-y-1.5 ${
      icon || square ? "aspect-square rounded-full" : "rounded-2xl"
    } text-white outline-offset-4 cursor-pointer ${className}`,
    `bg-gray-700 transition-all ${
      icon || square ? "aspect-square flex justify-center items-center rounded-full" : "p-2 px-8 rounded-2xl"
    } -translate-y-1 active:!translate-0 cursor-pointer ${className}`,
  ];

  const button = (
    <button className={secondary ? secondaryClasses[0] : primaryClasses[0]} onClick={onClick}>
      <div className={secondary ? secondaryClasses[1] : primaryClasses[1]}>
        {icon ? <span className="material-symbols-rounded">{children}</span> : children}
      </div>
    </button>
  );

  return link ? <Link to={link}>{button}</Link> : button;
}
