import './App.css';
import {useState} from "react"

function App() {
  const [inputValue,setInputValue] = useState("")
  const [inputArr,setInputArr] =useState([])
  const [message,setMessage] = useState("")



  const handlePush=(value)=>{
      const newArr=[...inputArr]
      setInputArr(arr=>[...arr,value])
  }

  const handlePop=()=>{
      const newArr=[...inputArr]
        const removeLastElement=newArr.slice(0,-1)
        setInputArr(removeLastElement)
  }
   const handleIsEmpty=()=>{
          if (inputArr.length === 0){
            setMessage("Stack is Empty")
          }else {
          setMessage("Stack is not Empty")
          }
   }
   const handlePeek=()=>{
    const newArr=[...inputArr]
    if (newArr.length !== 0){
      const removedElement=newArr.pop()
      setMessage(`Last Element is ${removedElement}`)

    }
   }


    const handleInputChange=(e)=>{
      const { value } = e.target;
      setInputValue(value)
    }


  return (
    <div className="App">
        <h1>Stack</h1> 
        <p>Everything is awesome</p>   
    <div className="stack-container">
          <div>
            <input type="text" value={inputValue} onChange={handleInputChange}  />
            <button onClick={()=>handlePush(inputValue)}>
              Push
            </button>
             <button onClick={handlePop}>
              Pop
            </button>
             <button onClick={handlePeek}>
              Peek
            </button>
             <button onClick={handleIsEmpty}>
              isEmpty
            </button>
          </div>
          <div className="stack-message">
              {message}
          </div>
          <div className="stack-list">
              {
                inputArr.map((input,i)=>(
                  
                  <p key={i}>{input}</p>

                ))
              }
          </div>
      </div>  
    </div>
  );
}

export default App;
