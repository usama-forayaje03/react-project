
function NextButton(props) {
  return (
    <button onClick={() => props.onClick() } className="btn btn-primary mr-20">Accept</button>
  )
}

export default NextButton