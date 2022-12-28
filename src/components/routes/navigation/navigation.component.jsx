import './navigation.style.scss'

import CartDropdown from '../../cart-dropdown/cart-dropdown.component';
import CartIcon from '../../cart-icon/cart-icon.component';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../../assets/shopping-logo-svgrepo-com.svg';
import { UserContext } from '../../../contexts/user.context';
import { CartContext } from '../../../contexts/cart.context';
import { useContext } from 'react';
import { userSingOut } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <ShopLogo className='logo' width='45px' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'/shop'}>SHOP</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={userSingOut}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to={'/auth'}>
                                SIGN IN
                            </Link>
                        )}
                    <CartIcon />
                </div>
                {isCartOpen ? <CartDropdown /> : null}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;