import { useState } from "react"
import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import getBoxPropertiesValue from "../../../utils/getBoxPropertiesValue"
import ModalResult from "./ModalResult"

const ModalBtn = () => {
    const [showModal, setShowModal] = useState(false)
    const boxPropertiesValues = useSelector(state => state.boxProperties)
  return (
    <>
        <button 
        onClick={() => 
            {setShowModal(!showModal)
            console.log(getBoxPropertiesValue(boxPropertiesValues));
            }
        
        }
        className="relative z-0 mx-auto mt-2 py-1 px-3 rounded bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
    Get the code
        </button>

        {showModal && 
            createPortal(
                <ModalResult closeModal={() => setShowModal(!showModal)} />,
                document.body
            )
        }
    </>
  )
}
export default ModalBtn