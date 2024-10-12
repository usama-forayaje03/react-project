
function PrevButton(props) {
  return (
    <button onClick={() => props.onClick() } className="btn btn-secondary">Deny</button>
  )
}

export default PrevButton