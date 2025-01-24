import React,{useState} from "react";

function Counter818(){
     const [count, setCount] = useState(0);

     const increment = () =>{
        setCount(count + 1);
     }

     const decrement = () =>{
        setCount(count - 1);
     }
     const reset = () =>{
        setCount(0);
     }

     return(
        <div className="counter">
           <p className="title-count">Counter</p>
           <p className="value-count">{count}</p>
            <button className="count-btn" onClick={increment}>Increment</button>
            <button className="count-btn"  onClick={decrement}>Decrement</button>
            <button  className="count-btn"  onClick={reset}>Reset</button> 
        </div>
     );

}

export default Counter818