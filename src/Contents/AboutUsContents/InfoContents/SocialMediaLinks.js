import infostyle from '../../../styles/info.module.css';
const SocialMediaLinks = () => {
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-link" id={infostyle.logo}></i>
                    <h4>Social Media & Links</h4>
                </div>
                <button className={infostyle.editbtn}><i class="fa-solid fa-pen"></i></button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div className={infostyle.social}>
                        <div>
                            <a href='/'><i class="fa-solid fa-globe"></i></a>
                            <span>&nbsp;&nbsp;Website</span>
                        </div>
                        <div>
                            <a href='/'><i class="fa-brands fa-square-instagram"></i></a>
                            <span>Instagram</span>
                        </div>
                        <div>
                            <a href='/'><i class="fa-brands fa-facebook"></i></a>
                            <span>Facebook</span>
                        </div>
                        <div>
                            <a href='/'><i class="fa-brands fa-twitter"></i></a>
                            <span>&nbsp;&nbsp;Twitter</span>
                        </div>
                    </div>    
                </div>
            </div>
            
        </div>
    );
}
export default SocialMediaLinks;