import sidenavstyle from '../styles/sidenavbar.module.css';
import logo from '../images/at-inks-logo.jpg';
import { useLinks } from '../hooks';
const Sidenavbar = () => {
    const links = useLinks();

    const changeHomepage = (e) => {
        links.changeActivePage(e.target.innerText);
    }

    return(
        <div className={sidenavstyle.sidenav}>
            
            <div className={sidenavstyle.top}>
                <div className={sidenavstyle.logoContainer}>
                    <img className={sidenavstyle.navLogo} src={logo} alt='logo'></img>
                </div>
                <span className={sidenavstyle.name}>A.T. Inks</span>
            </div>
            <div className={sidenavstyle.middle}>
                <ul className={sidenavstyle.menuList} id='sidenavlist'>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Dashboard'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-chart-pie"></i>Dashboard
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Orders'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-box-open"></i>Orders
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Team Members'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-user-group"></i>Team Members
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Partners'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-handshake-angle"></i>Partners
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Product Listings'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-boxes-stacked"></i>Product Listings
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Awards & Honours'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-trophy"></i>Awards & Honours
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'About Us'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-circle-info"></i>About Us
                    </li>
                    <li className={sidenavstyle.menuListItem} onClick={changeHomepage} id={links.activePage === 'Payment info'? sidenavstyle.active : ''}>
                        <i class="fa-solid fa-credit-card"></i>Payment info
                    </li>
                </ul>
            </div>
            <div className={sidenavstyle.bottom}>
                <i class="fa-solid fa-circle-question"></i>
                <span className={sidenavstyle.help}>Need Help?</span>
                <span className={sidenavstyle.helpContent}>Our support team is at your disposal</span>
                <button className={sidenavstyle.helpBtn}>
                    Get Help
                </button>
            </div>
        </div>
    );
}
export default Sidenavbar;