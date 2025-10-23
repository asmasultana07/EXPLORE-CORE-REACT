import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Core Concept</h1>
      
      <Person></Person>
      <Student></Student>
      <Developer name="asma" tec="JS"></Developer>
      <Developer name="asa" tec="PYTHON"></Developer>
      <Developer name="abbie" tec="JAVA"></Developer>
    </>
  )
}

function Developer(props){
  console.log(props);
  return (
    <div style= {{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tec}</p>
    </div>
  )
}


function Student(){
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}
function Person(){
  const age =17;
  const name = 'Jolil';

  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }
  return (
    <p style={personStyle}>i am a person</p>
  )
}

export default App
