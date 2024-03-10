import { IoIosCloseCircleOutline } from "react-icons/io";


const Modal = ({onClose,isOpen,children}) => {

  return<>{isOpen && <div className="flex justify-center content-start relative">
     <div className="w-[360px] h-m-[200px]  bg-white flex justify-center p-4 absolute rounded-xl  z-50">
      <div>
         
     <p className="text-center">running in test mode</p>
        {children}
      </div>



     <IoIosCloseCircleOutline onClick={onClose} className="text-3xl relative right-[-60px] cursor-pointer"/>
     </div> 
  
  </div>
}
    <>

        </>
  </> 
}

export default Modal