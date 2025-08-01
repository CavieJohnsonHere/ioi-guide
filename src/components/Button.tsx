export default function Button({
  children,
  className,
  secondary,
}: {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}) {
  const primaryClasses = [
    `bg-pink-900 hover:[&>div]:-translate-y-1.5 rounded-2xl text-white outline-offset-4 ${className}`,
    `bg-pink-700 transition-all p-2 px-8 rounded-2xl -translate-y-1 active:!translate-0 ${className}`,
  ];

  const secondaryClasses = [
    `bg-gray-900 hover:[&>div]:-translate-y-1.5 rounded-2xl text-white outline-offset-4 ${className}`,
    `bg-gray-700 transition-all p-2 px-8 rounded-2xl -translate-y-1 active:!translate-0 ${className}`,
  ];

  return (
    <button className={secondary ? secondaryClasses[0] : primaryClasses[0]}>
      <div className={secondary ? secondaryClasses[1] : primaryClasses[1]}>{children}</div>
    </button>
  );
}
