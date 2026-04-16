export function Facebook({
  size = 24,
  color = "currentColor",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
    >
      <path d="M14 9h3l-1 4h-2v7h-4v-7H8V9h2V7.5C10 5.57 11.57 4 13.5 4H17v4h-2c-.55 0-1 .45-1 1V9z" />
    </svg>
  );
}
