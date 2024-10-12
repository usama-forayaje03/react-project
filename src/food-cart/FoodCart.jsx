import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

function FoodCart(props) {

    let {image, name, facilities} = props.data;

    

  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
        <div className="card text-green-500 text-xl font-bold w-96 bg-white rounded-md">
            <div className="m-4">
                <img className="rounded-sm" src={image} alt="image" />
            </div>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{facilities}</p>
            <div className="card-actions justify-end mt-5">
            <NextButton onClick={props.onClick} />
            <PrevButton onClick={props.prevClick} />
            </div>
        </div>
        </div> 
    </div>
  )
}

export default FoodCart