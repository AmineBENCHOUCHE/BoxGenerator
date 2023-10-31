import Shadow from "./Shadow"
import { useSelector, useDispatch } from "react-redux"
import { addShadow } from "../../features/shadows"

const Shadowlist = () => {
  const dispatch = useDispatch()
  const shadows = useSelector(state => state.shadows)
  return (
    <div>
      <div className="flex justify-between border-b border-gray-300 px-6 py-4 my-2">
        <p className="text-lg font-bold">Customize  Shadows</p>
        <button
        onClick={() => dispatch(addShadow())}
        className="bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white px-3 py-1 text-sm  rounded "
        >Add a Shadow</button>
      </div>
      <div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow
          panelNumber ={index+1}
          shadow ={shadow}
          key={shadow.id}
          />
        ))}
      </ul>
        
      </div>
      
    </div>
  )
}
export default Shadowlist