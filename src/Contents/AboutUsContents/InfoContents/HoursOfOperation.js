import infostyle from '../../../styles/info.module.css';
const HoursOfOperation = () => {
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-business-time" id={infostyle.logo}></i>
                    <h4>Hours Of Operations</h4>
                </div>
                <button className={infostyle.editbtn}><i class="fa-solid fa-pen"></i></button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div>
                        <span className={infostyle.desc}>Monday to Friday - 9:00 Am to 6:00 Pm</span>
                    </div>   
                </div>
            </div>
            
        </div>
    );
}

export default HoursOfOperation;