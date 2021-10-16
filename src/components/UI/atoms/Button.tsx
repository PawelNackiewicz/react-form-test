type ButtonProps = {
  variant: "PRIMARY" | "SECONDARY" | "OUTLINED";
  label: string;
};

export function Button({ variant, label }: ButtonProps) {
  if (variant === "PRIMARY")
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-full">
        {label}
      </button>
    );
  if (variant === "SECONDARY")
    return (
      <button className="bg-pink-800 hover:bg-pink-900 text-white text-center py-2 px-4 rounded-full">
        {label}
      </button>
    );
  return (
    <button className="bg-green-500 hover:bg-green-700 text-white text-center py-2 px-4 rounded-full">
      {label}
    </button>
  );
}

Button.defaultProps = { variant: "PRIMARY" };
Button.displayName = "Button";
