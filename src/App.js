
import './App.css';
import Counter from './Counter';
import Employee from './Employee';


const employeeInfo=[
    {
      firstName:'Jack',
      lastName:'Hamilton',
      age:'24',
      id:'1'
    },
    {
      firstName:'Jane',
      lastName:'Watson',
      age:'22',
      id:'2'
    },
    {
      firstName:'Andrew',
      lastName:'Garfield',
      age:'28',
      id:'3'
    },
    {
      firstName:'Thomas',
      lastName:'Wayne',
      age:'34',
      id:'4'
    }
  ];

function App() {
  const name='hello';
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>
        {employeeInfo.map(employee=>{
          
          return(
            <Employee key={employee.id} {...employee}/>
          );
        })}


      </header>
    </div>
  );
}

export default App;
