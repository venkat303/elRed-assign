import navstyle from '../styles/navbar.module.css';
import logo from '../images/at-inks-logo.jpg'
import profilepic from '../images/blank-profile-pic.webp'
const Navbar = () => {
    return(
        <div className={navstyle.nav}>
            <div>
                <img className={navstyle.navLogo} src={logo} alt='logo'></img>
                <span className={navstyle.name}>A.T. INKS</span>
            </div>
            <div className={navstyle.searchContainer}>
                <i className="fa-solid fa-magnifying-glass" id={navstyle.searchicon} ></i>
                <input className={navstyle.navSearch}  type="text" placeholder='Search...'/>
            </div>
            <div className={navstyle.rightNav}>
                <div className={navstyle.checkout}>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span>Checkout (200)</span>
                </div>
                <div className={navstyle.user}>
                    <img className={navstyle.profilepic} src={profilepic} alt='logo'></img>
                    <span className={navstyle.username}>User Admin</span>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    );
}
export default Navbar;