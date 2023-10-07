import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import Results from './components/results/Results'
function App() {
  const [check,setCheck]=useState(false);
  const [values, setValues] = useState({});
  
  const handleData = (d) =>{
    
    setCheck(true);
    // loadResult();
    setValues(values =>({
      ...d
    }));
    // setValues(values=>({}));
  }


  

  return (
    <div className="App">
      <div className="Title">INVESTMENT CALCULATOR</div>
      <Form onGetData={handleData}/>
      {check? <Results items={values}/>: ""}
    </div>
  );
}

export default App;
