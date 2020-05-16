import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector'

//import './header.style.scss';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLinkContainer
} from './header.style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLinkContainer to='/shop'>
                shop
            </OptionLinkContainer>
            <OptionLinkContainer to='/contact'>
                contact
            </OptionLinkContainer>
            {
                currentUser ?
                    <OptionLinkContainer as='div' onClick={() => {
                        auth.signOut();
                        // setCurrentUser(null)

                    }}>Sign Out</OptionLinkContainer>
                    :
                    <OptionLinkContainer to='/signin'>Sign In</OptionLinkContainer>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);