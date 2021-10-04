import React from "react";
//import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { logoutUser } from "../../redux/user/user.action";
import {
  clickOutsideCart,
  deleteItemsAfterLoggedOut,
} from "../../redux/cart/cart.action";

//import './header.style.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from "./header.style";

const Header = ({
  currentUser,
  hidden,
  logoutUser,
  clickOutsideCart,
  deleteItemsAfterLoggedOut,
}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">shop</OptionLinkContainer>
      <OptionLinkContainer to="/contact">contact</OptionLinkContainer>
      {currentUser ? (
        <OptionLinkContainer
          as="div"
          onClick={() => {
            logoutUser();
            deleteItemsAfterLoggedOut();
            // setCurrentUser(null)
          }}
        >
          Sign Out
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer to="/signin">Sign In</OptionLinkContainer>
      )}
      <div className="container" tabIndex="0" onBlur={() => clickOutsideCart()}>
        <div className="first-child">
          <CartIcon />
        </div>
        <div className="seconed-child">{hidden ? null : <CartDropdown />}</div>
      </div>
    </OptionsContainer>
  </HeaderContainer>
);
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  clickOutsideCart: () => dispatch(clickOutsideCart()),
  deleteItemsAfterLoggedOut: () => dispatch(deleteItemsAfterLoggedOut()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
