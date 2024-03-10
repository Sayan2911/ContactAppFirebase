import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const Search = ({btn,funct}) => {
  return (
    <> 
    <div className="flex relative items-center gap-1">
    <FaSearch className="text-white absolute text-3xl mx-2  " />
    <input onChange={funct} type="text" placeholder="search here" className="border-white border rounded-md bg-transparent my-4  flex w-[90%] h-10 text-white px-10 text-xl"  />
    <CiCirclePlus className="text-4xl text-white cursor-pointer " onClick={btn} />
    </div>

    </>
  )
}

export default Search