import logo from './logo.svg';
import './App.css';

function App() {
  
  const items = ['Apple','Banana','Orange','Mango','Kiwi'];

  return (
    <div className="App">
      <h1>My Fruits List</h1>
      <ul>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>      
    </div>
  );
}

export default App;
