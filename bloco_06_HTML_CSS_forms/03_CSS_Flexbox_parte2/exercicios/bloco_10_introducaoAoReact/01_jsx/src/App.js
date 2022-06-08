import './App.css';
//import Component from './Component';

function App() {

  const tasks = ['levantar cedo', 'escovar os dentes', 'Matemática!', 'JavaScript!'];
  // const calma = tasks.map( (task) => <li>{task}</li>)
  // console.log(calma);
  const Task = (tasks) => {
    const newList = tasks.map( (task) => <li>{task}</li>)
    return <ol>{newList}</ol>
  }

  return ( <div>
    {Task(tasks)}
  </div> );
}

export default App;
