import getBoxShadowValue from "../../../utils/getBoxShadowValue"
import getBoxPropertiesValue from "../../../utils/getBoxPropertiesValue"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const ModalResult = ({closeModal}) => {
    const shadowValues = useSelector(state =>state.shadows)
    const boxPropertiesValues = useSelector(state =>state.boxProperties)
    useEffect(() => {
        // empecher le scroll quand on est en modal
      document.body.style.overflowY ="hidden"
      // cleanup function
      return () => document.body.style.overflowY="auto"
 
    }, [])
    let runningAnimation  = false
    function handleCopy(e){
        if(!runningAnimation){
            runningAnimation=true
            e.target.textContent = "Copied !"
            setTimeout(() => {
                e.target.textContent = "Copy"
                runningAnimation=false
            }, 1250);
        }
        navigator.clipboard.writeText(`box-shadow: ${getBoxShadowValue(shadowValues)} `)
    }
    
  return (
    <div  
        className="fixed z-10 inset-0 flex justify-center items-center bg-gray-600/75">
            <div
            onClick={e =>e.stopPropagation()}
            className="max-w-[400px] rounded p-7 bg-gray-50 mb-[10vh]"
            >
                <div className="flex mb-5 items-end">
                    <p className="font-semibold mr-5">Here is your code 🎉</p>
                    <button

                    onClick={handleCopy}
                    className="ml-auto mr-2 bg-blue-600 text-sm text-white hover:bg-blue-700 px-3 py-1 rounded ">
                        Copy
                    </button>
                    <button
                    onClick={closeModal}
                    className="bg-red-600 text-sm text-white hover:bg-red-700 px-3 py-1 rounded ">
                        Close
                    </button>
                </div>
                    <p className="p-5 bg-gray-100 rounded">
                        <span className="font-semibold ">box-shadow :
                        </span>
                        <span>{getBoxShadowValue(shadowValues)}</span>

                        {getBoxPropertiesValue(boxPropertiesValues).map((boxPropertie, index) => (
                            <li 
                            className="list-none"
                            key={index}>
                                <span className="font-semibold">{boxPropertie.prop}</span>
                                <span>{boxPropertie.value}</span>
                            </li>
                        ))}
                        
                       

                    </p>

            </div>
    </div>
  )
}
export default ModalResult