import { useState } from "react"


const UseDisclous = () => {
    const [isOpen, setisOpen] = useState(false)
const Open=()=>{
  setisOpen(true)
}
const Close=()=>{
  setisOpen(false)
}
  return (
    {
      Close,Open,isOpen
    }
  )
}

export default UseDisclous