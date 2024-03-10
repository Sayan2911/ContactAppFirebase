import { useEffect,useState } from 'react'
import './App.css'
import Search from "./components/Search"
import Navbar from './components/Navbar'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import ContactCards from './components/ContactCards'
import Update from './components/Update'
import UseDisclous from './hooks/UseDisclous'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"




function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    
  
   const getContacts= async () => {
    try {
      const Collection= collection(db,"contacts")
      

      onSnapshot(Collection,(snapshot)=>{
        const contactList= snapshot.docs.map((doc)=>{
          return{
            data:doc.data(),
            id:doc.id
          }
        })
        setContacts(contactList)
        return contactList
      })
     
    } catch (error) {
      console.log(error);
    }
    
  };
  getContacts()
}, [])


  
const {Close,Open,isOpen} = UseDisclous()


 const filterContact=(e)=>{
  const value=e.target.value
  const Collection= collection(db,"contacts")
      

  onSnapshot(Collection,(snapshot)=>{
    const contactList= snapshot.docs.map((doc)=>{
      return{
        data:doc.data(),
        id:doc.id
      }
    })

    const filterdContacts= contactList.filter(contact =>
      contact.data.name.toLowerCase().includes(value.toLowerCase()))
    setContacts(filterdContacts)
    return filterdContacts})
}


  return (
    <>
    <div className='m-4 p-4 mx-auto max-w-[370px] '>
      <Navbar/>
      <Search  btn={Open} funct={filterContact}/>

    <div  >
   { contacts.map((contacts)=>( <ContactCards key={contacts.id} contact={contacts}/>))}
         
    </div>
    
    </div>
   <Update isOpen={isOpen} onClose={Close}/>
   <ToastContainer/>
    </>
  )
}

export default App
