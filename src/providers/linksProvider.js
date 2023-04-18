import { createContext } from "react"
import { useProvideLinks } from "../hooks";
import { contacts } from "../data/ContactsData";

const initialState = {
    activePage: 'About Us',
    showContactList: false,
    showEidtContact: false,
    contactList:contacts,
    contactToEdit:{},
    changeActivePage: () => {},
    toggleContactList: () => {},
    deleteContact: () => {},
    toggleEditContact: () => {},
    updateContact: () => {}

}

export const LinksContext = createContext(initialState);

export const LinksProvider = ({ children }) => {
    const links = useProvideLinks();
    return <LinksContext.Provider value={links}>{children}</LinksContext.Provider>
}