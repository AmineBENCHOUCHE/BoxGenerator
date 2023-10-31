import ShadowRange from "./ShadowRange"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowCheckbox from "./ShadowCheckbox"
import { useState, useEffect } from "react"
import chevron from "../../assets/chevron.svg"
import { removeShadow } from "../../features/shadows"
import { useDispatch } from "react-redux"


const Shadow = ({panelNumber, shadow}) => {
const [toggleShadow, setToggleShadow] = useState(false);
useEffect(() => {
  if(panelNumber===1) {
    setToggleShadow(true)
  }

}, [])

const shadowInputs = shadow.inputs.map((input, index) => {
    if(input.type ==="range"){
      return <ShadowRange key={index} inputData={shadow.inputs[index]} shadowID={shadow.id} />
    }
    else if(input.type === "color"){
      return <ShadowColorPicker key={index} inputData={shadow.inputs[index]} shadowID={shadow.id}  />
    }
  })
  const dispatch = useDispatch()

return(
   <li className="bg-gray-50 border-b border-gray-300">
    <button
    className="px-6 py-4 items-center hover:bg-gray-100 flex w-full justify-between"
    onClick={() => setToggleShadow(!toggleShadow)}
    >
        <span>Shadow {panelNumber}</span>
        <img
         style={{transform: `${toggleShadow? "rotate(90deg)": "rotate(0deg)"}`}}
        className="font-bold w-5"
        src={chevron} alt="chevron" />

    </button>
    {toggleShadow && <>
        <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name="active" shadowID={shadow.id}/> 
            <ShadowCheckbox name="inset" shadowID={shadow.id}/> 
            <button 
            onClick={() => dispatch(removeShadow(shadow.id))}
            className="bg-red-600 ml-auto text-sm py-1 px-3 rounded  text-white ">Remove</button>

        </div>
        <div className="px-6 py-4">
            {shadowInputs}
        </div>
    </>}

   </li>
)

}
export default Shadow