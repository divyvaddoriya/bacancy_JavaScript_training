
const TagElement = ({tagName  , handleRemove}) => {
  return (
        <div style={{backgroundColor: "black" , color: "white"}}>
        <h1>{tagName}</h1>
        <button onClick={() => handleRemove(tagName)}>
            X
        </button>
    </div>
)
}

export default TagElement