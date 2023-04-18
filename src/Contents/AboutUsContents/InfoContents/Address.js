import infostyle from '../../../styles/info.module.css';
const Address = () => {
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-location-dot" id={infostyle.logo}></i>
                    <h4>Address</h4>
                </div>
                <button className={infostyle.editbtn}><i class="fa-solid fa-pen"></i></button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div>
                        <span className={infostyle.desc}>C-1 /351 /4 ,GIDC Markapura,vadodara - 390010, Gujarat, India.</span>
                    </div>   
                </div>
            </div>
            
        </div>
    );
}

export default Address;