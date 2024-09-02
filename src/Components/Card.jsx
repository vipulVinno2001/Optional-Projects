

const Card = (props) => {
  return (
    <div className="flex justify-between  p-4 bg-blue-400 text-center rounded-lg">
        {props.children}
    </div>
  )
}

export default Card