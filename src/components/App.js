import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import { useLinks } from '../hooks';
import ContactsList from '../pages/ContactsList';
import EditContact from '../pages/EditContact';

function App() {

  const links = useLinks();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidenavbar />
        <Routes>
          <Route path='/' element={<Home activePage={links.activePage}/>}/>
        </Routes>
        {links.showContactList ? <ContactsList contactList={links.contactList}/> : ''}
        {links.showEidtContact ? <EditContact editContact = {links.contactToEdit}/> : ''}
      </Router>
    </div>
  );
}

export default App;
