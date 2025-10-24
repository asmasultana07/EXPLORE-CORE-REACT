import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo';
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';

function App() {
  const [count, setCount] = useState(0)
  // const time =50;
  // const actors = ['hena','bappa raj', 'omar Sunny', 'Salman shah', 'abdur'];
  const singers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Tahsan', age: 45},
    {id: 3, name: 'Shuro Deb', age: 57 }
  ];

  const books = [
    {id:1, name: 'Physics', price: 250},
    {id:2, name: 'Chemistry', price: 300},
    {id:3, name: 'Math', price: 555},
    {id:4, name: 'Bangla', price: 100},
  ]


  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>React Core ConceptS</h1>
      
      <Library books={books}></Library>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }
      // {
      //   actors.map(actor => <Actor actor={actor}></Actor>)
      // }
      
      
      
      {/* <Todo task="Learn React" isDone={true} time={time}></Todo>
      <Todo task="Revise JS" isDone={false}></Todo>
      <Todo task="copy nodejs" isDone={false}></Todo> */}


      {/* <Person></Person>
      <Student></Student>
      <Developer name="asma" tec="JS"></Developer>
      <Developer name="asa" tec="PYTHON"></Developer>
      <Developer name="abbie" tec="JAVA"></Developer>
      <Player name="tamim" runs='5000'></Player>
      <Player name="ramim" runs='4000'></Player>
     */}
    </>
  )
}

function Player(){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Runs: {props.runs}</p>
    </div>
  )
}

// const {name, tech} = {name: 'asma', tec: 'JS'}

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
