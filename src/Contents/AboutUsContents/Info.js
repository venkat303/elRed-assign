import infostyles from '../../styles/info.module.css'
import Address from './InfoContents/Address';
import Contact from './InfoContents/Contact';
import HoursOfOperation from './InfoContents/HoursOfOperation';
import SocialMediaLinks from './InfoContents/SocialMediaLinks';
import Statement from './InfoContents/Statement';
const Info = () => {
    return(
        <div className={infostyles.infoTab}>
            <Contact />
            <Address />
            <HoursOfOperation />
            <SocialMediaLinks />
            <Statement />
        </div>
    ); 
}

export default Info;