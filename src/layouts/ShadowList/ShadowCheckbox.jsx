import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { updateCheckbox } from "../../features/shadows"

const ShadowCheckbox = ({name, shadowID}) => {
    const checkboxShadow = useSelector(state => state.shadows.find(
        shadow => shadow.id === shadowID
    ))
    const dispatch = useDispatch()
  return (
    <>

        <input  
        onChange={() => dispatch(updateCheckbox({shadowID, name}))}       
        type="checkbox"
        checked={checkboxShadow[name]}
        className="h-4 w-4 rounded mr-2 border-gray-300"
        />
        <label
        className="leading-4 mr-5"
        id={`checkbox-${name}-${shadowID}`} 
        htmlFor={`checkbox-${name}-${shadowID}`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}

        </label>
    </>
  )
}
export default ShadowCheckbox