import { useDispatch } from "react-redux"
import { updateShadowValue } from "../../features/shadows"

 

const BoxColorPicker = ({inputData,shadowID}) => {
  const dispatch = useDispatch()
  function handleInputs(e){
    dispatch(updateShadowValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value,
      shadowID
    }))
  }
  return (
    <div className="mt-3 ">
      <p>
        {inputData.name}
      </p>
      <div className="flex mt-2">
        <input 
        value={inputData.value}
        onChange={handleInputs}
        className=" flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
        type="text" />
        <input 
        className="h-[40px] cursor-pointer"
         value={inputData.value}
         onChange={handleInputs}
        type="color" />
      </div>

    </div>
  )
}
export default BoxColorPicker