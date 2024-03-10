import {Field, Form, Formik} from "formik"
import Modal from './Modal'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import {Name,Email} from "random-data-generators"
import { toast } from "react-toastify"


const Update = ({isOpen,onClose,isUpdate,contact}) => {

    const addContact= async (contact)=>{
  
        try {
            const contactRef=collection(db,"contacts")
            await addDoc(contactRef , contact)
            toast.success("contact added succesfully")
        } catch (error) {
            console.log(error);
        }
   
    }
    
    const updateContact= async (contact,id)=>{
        try {
            const contactRef=doc(db,"contacts", id)  
            await updateDoc(contactRef , contact)
            toast.success("contact updated succesfully")
        } catch (error) {
            console.log(error);
        }
    }

  

  return (
    <div> <Modal isOpen={isOpen} onClose={onClose} >
        <Formik initialValues={{
            name: isUpdate?contact.data.name: Name,
            email:isUpdate?contact.data.email:Email,
        }}
        onSubmit={(values)=>{
            isUpdate?updateContact(values,contact.id):addContact(values)
           
        }}>
        <Form>
           <div className="flex flex-col gap-3">

                <div className="flex flex-col gap-1 justify-center content-center">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="border" />
                </div>
                <div className="flex flex-col gap-1 ">
                    <label htmlFor="email">Email</label>
                    <Field name="email" className="border" />
                </div>

           </div>
           <button className="border w-full my-5 bg-yellow rounded-lg cursor-pointer"  >
            {
            isUpdate? "update ":"add "
           }Contact</button>
        </Form>

        </Formik>

         </Modal></div>
  )
}

export default Update