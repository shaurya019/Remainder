import React,{useState} from 'react';
import Data from './Component/data'
import List from './Component/list'
import './App.css';

function App() {
  const[people,setPeople] = useState(Data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
