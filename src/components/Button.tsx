import styles from "./Button.module.css";

type Size = "sm" | "default" | "lg";

export const Button = ({
  className = "",
  size = "default",
  children,
}: {
  className?: string;
  size?: Size;
  children: React.ReactNode;
}) => {
  return (
    <button className="">
      <span className="">{children}</span>
    </button>
  );
};
