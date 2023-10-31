import ModalBtn from "./Modal/ModalBtn"
import getBoxShadowValue from "../../utils/getBoxShadowValue"
import { useSelector } from "react-redux";
 

const Visualization = () => {
   const shadowValues = useSelector(state => state.shadows )
//    console.log(getBoxShadowValue(shadowValues));
const boxProperties = useSelector(state => state.boxProperties)
  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
        <div 
        className="w-[250px] h-[250px] mb-10 lg:mb-10 bg-white rounded-xl"
        // slice(0,-1) permet denelever le ; à la fin }
        style={{
            boxShadow: `${getBoxShadowValue(shadowValues).slice(0,-1)}`,
            borderRadius: `${boxProperties[0].value}px`,
            height: `${boxProperties[1].value}px`,
            width: `${boxProperties[2].value}px`,
            backgroundColor: `${boxProperties[3].value}`
        }}
        
        >
        </div>
      <ModalBtn/>

    </div>
  )
}
export default Visualization