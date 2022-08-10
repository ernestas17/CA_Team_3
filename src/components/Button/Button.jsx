import { StyledButton } from "./Button.style";

const Button = ({ text, action, theme }) => {
  let buttonBackgroundColor = "";

  switch (theme) {
    case "primary":
      buttonBackgroundColor = "var(--orange)";
      break;
    case "secondary":
      buttonBackgroundColor = "var(--black)";
      break;
    default:
      buttonBackgroundColor = "var(--orange)";
      break;
  }
  return (
    <StyledButton
      style={{
        backgroundColor: buttonBackgroundColor,
      }}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
