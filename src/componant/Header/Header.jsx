 import logoimg from '../../images/logo.png'
 import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logoimg} alt="" />
            <nav><a href="/shop">Shop</a> 
            <a href="/review">Order Review</a>
            <a href="/manage">Manage Inventory</a>
            <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;