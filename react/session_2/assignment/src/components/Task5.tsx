// // 5. **Class → function**

import { useEffect, useState } from "react"

    
// //     Below is a working class component in the**classic**style`constructor(props)`,`super(props)`,`this.state`in the constructor, and a bound method for the event handler. You’ll see this pattern in older codebases. Add it to your sandbox, run it, then**rewrite it as a function component**using`useState`and`useEffect`(with cleanup where needed).


// class WindowWidth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       width: typeof window !== "undefined" ? window.innerWidth : 0
//     };
//     this.handleResize = this.handleResize.bind(this);
//   }

//   handleResize() {
//     this.setState({ width: window.innerWidth });
//   }

//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleResize);
//   }

//   render() {
//     return (
//       <div>
//         <p>Window width: <strong>{this.state.width}px</strong></p>
//         <small>Resize the window to see it update. Unmount to remove the listener.</small>
//       </div>
//     );
//   }
// }


const Task5 = () => {

    const [width , setWidth] = useState(window.innerWidth)

    useEffect(()=>{

        function handleResize(){
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize" ,handleResize)
        return ()=>{
         window.removeEventListener("resize" , handleResize)
    }
} , [] )


  return (
    <div>
         <div>
        <p>Window width: <strong>{width} px</strong></p>
        <small>Resize the window to see it update.</small>
      </div>
    </div>
  )
}

export default Task5