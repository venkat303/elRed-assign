import infostyle from '../../../styles/info.module.css';
const Statement = () => {
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-quote-left" id={infostyle.logo}></i>
                    <h4>Statement</h4>
                </div>
                <button className={infostyle.editbtn}><i class="fa-solid fa-pen"></i></button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div>
                        <span className={infostyle.desc}>You think it we ink it.</span>
                    </div>   
                </div>
                <div className={infostyle.count}>+2</div>
            </div>
            
        </div>
    );
}

export default Statement;