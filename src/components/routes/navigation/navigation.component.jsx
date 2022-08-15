import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as ShopLogo } from '../../../assets/shopping-logo-svgrepo-com.svg';
import './navigation.style.scss'

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <ShopLogo className='logo' width='45px' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'/shop'}>SHOP</Link>
                    <Link className='nav-link' to={'/auth'}>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;