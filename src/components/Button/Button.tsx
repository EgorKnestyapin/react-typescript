import "./styles.css";

interface ButtonProps {
  name?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick: () => void;
}

function Button({ name = "Send", type = "submit", onClick }: ButtonProps) {
  return (
    <button type={type} className="button-component" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;