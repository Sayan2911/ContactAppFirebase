
import {  deleteDoc, doc } from 'firebase/firestore'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdDelete, MdOutlineModeEditOutline } from 'react-icons/md'
import { db } from '../config/firebase'
import Update from './Update'
import UseDisclous from '../hooks/UseDisclous'
import { toast } from 'react-toastify'

const ContactCards = ({contact}) => {

  const deleteContact = async (id)=>{
    try {
      await deleteDoc(doc(db,"contacts", id))
      toast.success("contact deleted succesfully")
    } catch (error) {
      console.log(error);
    }
  }
  const {Close,Open,isOpen} = UseDisclous()
  return (
    <div>
        <div className='flex  bg-yellow h-16 items-center px-2 rounded-lg my-4'>
            
        <div key={contact.id} className='flex  items-center justify-center content-center
           gap-3  '>
            <FaRegUserCircle className='text-3xl text-darkYellow flex '/>

            <div className='flex flex-col w-48 overflow-hidden'>
            <p>{contact.data.name}</p>
            <p> {contact.data.email}</p>
            </div>
          
            <MdOutlineModeEditOutline  className='text-3xl text-black cursor-pointer' onClick={Open}/>
            <MdDelete className='text-3xl text-darkYellow cursor-pointer ' onClick={()=>deleteContact(contact.id)} />
          </div>
      
               </div>
    <Update isUpdate isOpen={isOpen} onClose={Close} contact={contact}/>
    </div>
  )
}

export default ContactCards