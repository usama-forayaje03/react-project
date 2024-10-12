import { useState } from "react"
import Search from "./Search"
import TotalToken from "./TotalToken"

function FormArea() {

  let [num, setNum] = useState(0)
  let [show, setShow] = useState(false)
  let clickHandler = () => {
    setNum(function(init) {
      return init + 1;
    })
  }


  return (
    <div>
        <Search />
        <div className="bg-white shadow-sm rounded-lg p-4 mt-3">
            <small className="text-red-500 hidden">Something Is Going Wrong.</small>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <small className="text-red-500 hidden">Something Is Going Wrong.</small>
            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
            <small className="text-red-500 hidden">Something Is Going Wrong.</small>
            <input type="text" placeholder="Type here" className="input input-bordered w-full mt-3" />
            <button className="btn btn-success mt-3 px-8 py-4 text-white  font-medium" onClick={clickHandler} >Add Token {num}</button>
            <button className="btn btn-success ml-4 mt-3 px-8 py-4 text-white  font-medium" onClick={() => setShow(true)}>open modal</button>
        </div>
        <div>
            <TotalToken dataName={num} />
        </div>
        
        <div className={!show ? 'hidden' : ''} >
            <dialog className="flex justify-center items-center bg-gray-300 fixed top-0 left-0 w-full h-screen ">
              <div className="modal-box ">
                <h3 className="font-bold text-lg ">Hello.</h3>
                <p className="py-4 ">Press ESC key or click the button below to close</p>
                <button onClick={() => setShow(false)} className="btn">Close</button>
              </div>
            </dialog>
        </div>
    </div>
    
  )
}

export default FormArea