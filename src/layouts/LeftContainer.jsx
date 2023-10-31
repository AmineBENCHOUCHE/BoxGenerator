import { useState } from "react"

import BoxPanel from "./BoxPanel/BoxPanel"
import Shadowlist from "./ShadowList/ShadowList"
const LeftContainer = () => {
    const [tabs, setTabs] = useState(0)
    const tabsList = [
        {
            name: "Shadow", component: <Shadowlist />},
        {   name: "BoxPanel", component: <BoxPanel />}
        
    ]
  return (
    <div className="relative mt-20 w-[800px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0">
        <div className="flex absolute -left-[1px] -translate-y-full">
            {tabsList.map((tab, index) => (
                <button
                    key={index} 
                    onClick={() => setTabs(index)}
                    className="min-w-[125px] py-2 px-3 mr-4 font-bold border-x border-t border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 focus:outline-none focus:ring-2 ring-inset focus: ring-blue-300">{tab.name}
                </button>                   
                
            ))}

        </div>
        <div className="h-full overflow-auto">
                {tabsList[tabs].component}
        </div>
    
    </div>
  )
}
export default LeftContainer
