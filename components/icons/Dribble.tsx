export function Dribble({
  className = "",
  size = 20,
  color = "currentColor",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.1 4.8C17.3 6.3 14.8 8 12 8c-2.8 0-5.3-1.7-7.1-3.2" />
      <path d="M4.9 19.2C6.7 17.7 9.2 16 12 16c2.8 0 5.3 1.7 7.1 3.2" />
      <path d="M3 12h18" />
      <path d="M12 3c-1.5 2.5-2 6-2 9s.5 6.5 2 9" />
      <path d="M12 3c1.5 2.5 2 6 2 9s-.5 6.5-2 9" />
    </svg>
  );
}
