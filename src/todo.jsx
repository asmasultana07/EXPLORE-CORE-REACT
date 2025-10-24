// export default function todo({task, isDone}){
    
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
// }
// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>Pending: {task}</li>
    
// }

// conditional rendering: 3 ternary
// condition ? true: false
// export default function ToDo({task, isDone, time= 0}) {
//     return isDone ?
//     <li>Done: {task} time: {time}</li> :
//     <li>Not Done: {task}</li>
// } 

// // conditional rendering: 4 &&
// export default function ToDo({task, isDone, time}){
//     return isDone && <li>Done Tasks: {task} time: {time}</li>
// }
// conditional rendering: 5 ||
export default function ToDo({task, isDone, time}){
    return isDone || <li> Not Done Tasks: {task} time: {time}</li>
}