import styles from '../styles/aboutus.module.css';
import logo from '../images/at-inks-logo.jpg';
import Info from '../Contents/AboutUsContents/Info';
const AboutUs = () => {

    return(
        <div className={styles.aboutUs}>
            <span className={styles.pageHeader}>About Us</span>
            <div className={styles.detailsContainer}>
                <div className={styles.logoContainer}>
                    <img className={styles.navLogo} src={logo} alt='logo'></img>
                </div>
                <div className={styles.nameContainer}>
                    <span className={styles.name}>A.T. Inks</span>
                    <span className={styles.subHead}>Digital Inks</span>
                </div>
                <div className={styles.verify}>
                    <i class="fa-solid fa-circle-check"></i>
                    <a href='/'>Verify Company</a>
                </div>
            </div>
            <div className={styles.companyDesc}>
                <span className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <button className={styles.descEdit}><i class="fa-solid fa-pen"></i></button>
            </div>
            <div className={styles.contents}>
                <ul className={styles.contentsList}>
                    <a href='/' className={styles.listLink} id={styles.contentActive}><li className={styles.contentsListItem}>Info</li></a>
                    <a href='/' className={styles.listLink}><li className={styles.contentsListItem}>FAQ</li></a>
                    <a href='/' className={styles.listLink}><li className={styles.contentsListItem}>Complaints and feedback</li></a>
                    <a href='/' className={styles.listLink}><li className={styles.contentsListItem}>Privacy Policy</li></a>
                    <a href='/' className={styles.listLink}><li className={styles.contentsListItem}>Terms and Conditions</li></a>
                </ul>
            </div>
            <div>
                <Info />
            </div>
        </div>
        
    );
}

export default AboutUs;