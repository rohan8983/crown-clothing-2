import "./navigation.style.js";

import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../../assets/shopping-logo-svgrepo-com.svg";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { useContext } from "react";
import { userSingOut } from "../../utils/firebase/firebase.utils";
import {
  LogoConatiner,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoConatiner to={"/"}>
          <ShopLogo className="logo" width="45px" />
        </LogoConatiner>
        <NavLinks>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={userSingOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
