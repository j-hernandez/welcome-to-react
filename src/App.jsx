import './App.css';

import Hello from './components/Hello';

const names = [
  'James',
  'Ron',
  'Cassie',
  'Baylie', 
  'New Name',
  'Again and Again',
  'James'
]
function App() {
  return (
    <div className="App">
      {
        /* Iterate over the names array and create a new "Hello" component for each*/
        names.map(n => <Hello key={n} name={n} />)
      }

    </div>
  );
}

export default App;
