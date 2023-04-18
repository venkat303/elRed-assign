import infostyle from '../../../styles/info.module.css';
import { useLinks } from '../../../hooks';
const Contact = () => {
    const links = useLinks();
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-address-book" id={infostyle.logo}></i>
                    <h4>Contact</h4>
                </div>
                <button className={infostyle.editbtn} onClick={()=> links.toggleContactList()}>
                    <i class="fa-solid fa-pen"></i>
                </button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div>
                        <i class="fa-solid fa-envelope" id={infostyle.logo}></i>
                        <span className={infostyle.desc}>salesteam@br.in / salesteam2@br.in</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone" id={infostyle.logo}></i>
                        <span className={infostyle.desc}>+91 9876543210 / 9087654321</span>
                    </div>    
                </div>
                <div className={infostyle.count}>+{links.contactList.length-1}</div>
            </div>
            
        </div>
    );
}

export const ListContact = (props) => {
    const links = useLinks();
    return(
        <div className={infostyle.component}>
            <div className={infostyle.compHead}>
                <div style={{display:'flex'}}>
                    <i class="fa-solid fa-address-book" id={infostyle.logo}></i>
                    <h4>{props.contact.name}</h4>
                </div>
                <button className={infostyle.editbtn}>
                    <i class="fa-solid fa-trash-can" onClick={()=> links.deleteContact(props.contact)}></i>
                    <i class="fa-solid fa-pen" onClick={()=>links.toggleEditContact(props.contact)}></i>
                </button>
            </div>
            <div className={infostyle.descCount}>
                <div className={infostyle.compDesc}>
                    <div>
                        <i class="fa-solid fa-envelope" id={infostyle.logo}></i>
                        <span className={infostyle.desc}>{props.contact.email1} / {props.contact.email2}</span>
                    </div>
                    <div>
                        <i class="fa-solid fa-phone" id={infostyle.logo}></i>
                        <span className={infostyle.desc}>{props.contact.phoneNo1} / {props.contact.phoneNo2}</span>
                    </div>    
                </div>
            </div>
        </div>
    );
}
export default Contact;