import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myArray = ['Andar', 'Correr', 'Dormir', 'Comer', 'Jogar', 'Estudar']

function App() {
  return (
    <div className="App">
      {Task('OI')}
      {Task('Tchau')}
      {myArray.map(element => Task(element))}
    </div>
  );
}

export default App;
