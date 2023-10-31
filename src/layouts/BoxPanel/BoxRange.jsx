import { useDispatch } from "react-redux"
import { updatBoxValue } from "../../features/boxProperties"

const BoxRange = ({inputData}) => {
  const dispatch = useDispatch()
  function handleInputs(e){
    dispatch(updatBoxValue({
      inputNumber: inputData.inputNumber,
      value: e.target.value
    }))
  }
  return (
    <div className="my-6">
      <div className="flex justify-between">
        <p>{inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input 
          value={inputData.value}
          onChange={handleInputs}
          className="w-14 mr-2 h-8 border border-gray-200 text-center"
          type="number" />
          <p>px</p>

        </div>
          </div>
        <div className="relative z-0 w-full flex items-center">
          <input 
          value={inputData.value}
          onChange={handleInputs}
          className="w-full h-[2px] bg-gray-300 rouded-lg appearance-none cursor-pointer"
          type="range" min={inputData.minMax[0]} max={inputData.minMax[1]} />
        <div className="absolute w-0.5 h-10 bg-gray-300 rounded -z-10 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">

        </div>

      </div>

    </div>
  )
}
export default BoxRange