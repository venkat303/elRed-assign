import AboutUs from '../pages/AboutUs';
import Orders from '../pages/Orders';
import Dashboard from '../pages/Dashboard';
import TeamMembers from '../pages/TeamMembers';
import Partners from '../pages/Partners';
import ProductListing from '../pages/ProductListing';
import AwardsAndHonours from '../pages/AwardsAndHonours';
import PaymentInfo from '../pages/PaymentInfo';
import homestyle from '../styles/home.module.css';
const Home = (props) => {

    return (
        <div className={homestyle.home}>
            {props.activePage === 'Dashboard'? <Dashboard /> : ''}
            {props.activePage === 'Orders'? <Orders /> : ''}
            {props.activePage === 'Team Members'? <TeamMembers /> : ''}
            {props.activePage === 'Partners'? <Partners /> : ''}
            {props.activePage === 'Product Listings'? <ProductListing /> : ''}
            {props.activePage === 'Awards & Honours'? <AwardsAndHonours /> : ''}
            {props.activePage === 'About Us'? <AboutUs /> : ''}
            {props.activePage === 'Payment info'? <PaymentInfo /> : ''}
            
        </div>
    );
}

export default Home;