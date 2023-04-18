import { ListContact } from '../Contents/AboutUsContents/InfoContents/Contact';
import { useLinks } from '../hooks';
import styles from '../styles/contactslist.module.css';
const ContactsList = (props) => {
    const links = useLinks();
    return (
        <div className={styles.contacts}>
            <div className={styles.head}>
                <i class="fa-solid fa-arrow-left-long" onClick={()=> links.toggleContactList()}></i>
                <span>Contacts</span>
                <div>Please provide the company's email and contacts.</div>
            </div>
            <div className={styles.list}>
                {props.contactList.map((contact,index) => (
                    <ListContact contact={contact} key={index}/>
                ))}
            </div>
            <button className={styles.saveBtn}>Save</button>
        </div>
    );
}

export default ContactsList;