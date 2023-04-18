import { useEffect, useState } from 'react';
import { useLinks } from '../hooks';
import styles from '../styles/editcontact.module.css';
const EditContact = (props) => {
    const [secondEmail , setSecondEmail] = useState(false);
    const [secondNumber , setSecondNumber] = useState(false);
    const [email1 , setEmail1] = useState(props.editContact.email1);
    const [email2 , setEmail2] = useState(props.editContact.email2);
    const [number1 , setNumber1] = useState(props.editContact.phoneNo1);
    const [number2 , setNumber2] = useState(props.editContact.phoneNo2);
    const links = useLinks();
    useEffect(()=>{
        const updatedContact = {...props.editContact ,email1:email1,email2:email2,phoneNo1:number1,phoneNo2:number2};
        links.updateContact(updatedContact);
    },[email1,email2,number1,number2,links,props.editContact])
    const showSecondEmail = (e) => {
        e.preventDefault();
        setSecondEmail(!secondEmail);
    }
    const showSecondNumber = (e) => {
        e.preventDefault();
        setSecondNumber(!secondNumber);
    }

    const updateContact = async (e) => {
        e.preventDefault();
        let mail1= document.getElementById('email1').value;
        let mail2;
        if(secondEmail){mail2=document.getElementById('email2').value};
        let num1=document.getElementById('number1').value;
        let num2;
        if(secondNumber){num2=document.getElementById('number2').value}

        if(mail1){
            setEmail1(mail1);
        }else{
            setEmail1(document.getElementById('email1').defaultValue);
        }
        if(secondEmail){
            if(mail2){
                setEmail2(mail2);
            }else{
                setEmail2(document.getElementById('email2').defaultValue);
            }
        }
        if(num1){
            setNumber1(num1);
        }else{
            setNumber1(document.getElementById('number1').defaultValue);
        }
        if(secondNumber){
            if(num2){
                setNumber2(num2);
            }else{
                setNumber2(document.getElementById('number2').defaultValue);
            }
        }
    }
    
    return (
        <div className={styles.editContact}>
            <div className={styles.header}>
                <i class="fa-solid fa-arrow-left-long" onClick={()=> links.toggleEditContact()}></i>
                <span>Edit Contact</span>
                <div>Please provide the company's email and contacts</div>
                <form className={styles.editForm}>
                    <div className={styles.inputDiv}>
                        <label for="email1">Email ID</label>
                        <input type='email' id='email1' placeholder='eg. salesteam@br.in' defaultValue={props.editContact.email1}></input>
                        {secondEmail ? <input type='email' id='email2' placeholder='eg. salesteam@br.in' defaultValue={props.editContact.email2}></input> : ''}

                        {
                            secondEmail 
                            ? <button onClick={(e)=>showSecondEmail(e)}><i class="fa-solid fa-circle-minus"></i> Remove</button>
                            : <button onClick={(e)=>showSecondEmail(e)}><i class="fa-solid fa-circle-plus"></i> Add More</button>
                        } 
                        
                    </div>
                    <div className={styles.inputDiv}>
                        <label for="number1" >Contact Number</label>
                        <input type='text' id='number1' placeholder='eg. 9876543210' defaultValue={props.editContact.phoneNo1}></input>
                        {secondNumber ? <input type='text' id='number2' placeholder='eg. 9876543210' defaultValue={props.editContact.phoneNo2}></input> : ''}
                        {
                            secondNumber
                            ? <button onClick={(e)=>showSecondNumber(e)}><i class="fa-solid fa-circle-minus"></i> Remove</button>
                            : <button onClick={(e)=>showSecondNumber(e)}><i class="fa-solid fa-circle-plus"></i> Add More</button>
                        }
                    </div>
                    
                    <button className={styles.saveBtn} onClick={(e)=>updateContact(e)}>Save</button>
                </form>
                
            </div>
        </div>
    );
}

export default EditContact;