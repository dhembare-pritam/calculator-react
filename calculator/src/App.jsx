import './App.css';
import styles from "./App.module.css";
import Display from './components/display';
import Btncontainer from './components/btncontainer';
import { useState } from 'react';

function App() {

  const [calcvalue,setcalvalue]=useState('')
  const onButtonClick = (buttontxt)=>{
    if(buttontxt==='c'){
      setcalvalue('')
    }else if(buttontxt=== '='){
    const  result = eval(calcvalue);
      setcalvalue(result)
    }else{
       const newDisplayValue = calcvalue + buttontxt;
       setcalvalue(newDisplayValue);
    }
  };
   return(
      <div className={styles.container}>
          <Display displayvalue={calcvalue }></Display>
         <Btncontainer onButtonClick={onButtonClick}></Btncontainer>
      </div>
   )
}

export default App;