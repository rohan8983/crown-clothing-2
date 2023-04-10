import "./button-style.js";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button-style.js";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttontype = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttontype]);

const Button = (props) => {
  const CustomButton = getButton(props.buttontype);
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;
