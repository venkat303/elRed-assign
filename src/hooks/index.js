import { useContext, useState } from "react";
import { LinksContext } from "../providers/linksProvider";
import { contacts } from "../data/ContactsData";


export const useLinks = () => {
    return useContext(LinksContext)
};

export const useProvideLinks = () => {
    const [activePage, setActivePage] = useState('About Us');
    const [showContactList , setShowContactList] = useState(false);
    const [contactList , setContactList] = useState(contacts);
    const [showEidtContact , setShowEditContact] = useState(false);
    const [contactToEdit , setCOntactToEdit] = useState({});

    const changeActivePage = (page) => {
        setActivePage(page);
    }

    const toggleContactList = () => {
        setShowContactList(!showContactList);
    }

    const deleteContact = (delContact) => {
        const newContactList = contactList.filter((contact) => (contact.id !== delContact.id));
        setContactList(newContactList);
    }

    const toggleEditContact = (contact) => {
        setCOntactToEdit(contact);
        setShowContactList(!showContactList);
        setShowEditContact(!showEidtContact);
    }

    const updateContact = (contact) => {
        let index;
        for(let i =0;i<contactList.length;i++){
            if(contactList[i].id === contact.id){
                index =i;
            }
        }
        const newList = contactList;
        newList[index] = contact;
        setContactList(newList);
    }

    return {
        activePage,
        showContactList,
        contactList,
        showEidtContact,
        contactToEdit,
        changeActivePage,
        toggleContactList,
        deleteContact,
        toggleEditContact,
        updateContact
    }
}