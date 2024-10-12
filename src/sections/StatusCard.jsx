
function StatusCard(props) {
  return (
    <div className="shadow-sm rounded-lg bg-white overflow-hidden mb-6">
    <div className={`"flex justify-between items-center ${props.bgColor} px-3 py-3 text-white text-xl mb-6 "`}>
        <h3>Active Token</h3>
        <span>5</span>
      </div>
        <ul>
          <li className="flex justify-between items-center mx-4 py-2 mb-3 bg-gray-100 rounded-sm">
              <div className="flex flex-col mx-2">
              <p className="font-Jost text-green-500 uppercase text-md">Usama Forayaje</p>
              <span className="font-bold font-Jost text-sm">01766060906</span>
              </div>
            <button className={`" ${props.bgColor} px-10 py-2 text-lg mx-2 font-Jost text-white font-bold rounded-sm"`}>Token No:2</button>
          </li>
          <li className="flex justify-between items-center mx-4 py-2 mb-3 bg-gray-100 rounded-sm">
              <div className="flex flex-col mx-2">
              <p className="font-Jost text-green-500 uppercase text-md">Usama Forayaje</p>
              <span className="font-bold font-Jost text-sm">01766060906</span>
              </div>
            <button className={`" ${props.bgColor} px-10 py-2 text-lg mx-2 font-Jost text-white font-bold rounded-sm"`}>Token No:2</button>
          </li>
          <li className="flex justify-between items-center mx-4 py-2 mb-3 bg-gray-100 rounded-sm">
              <div className="flex flex-col mx-2">
              <p className="font-Jost text-green-500 uppercase text-md">Usama Forayaje</p>
              <span className="font-bold font-Jost text-sm">01766060906</span>
              </div>
            <button className={`" ${props.bgColor} px-10 py-2 text-lg mx-2 font-Jost text-white font-bold rounded-sm"`}>Token No:2</button>
          </li>
         
        </ul>  
    </div>
  )
}

export default StatusCard