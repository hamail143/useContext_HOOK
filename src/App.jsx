/* eslint-disable no-unused-vars */
import Com_a from './Components/com_a';
import './App.css'
import { createContext } from 'react';

 const data= createContext();
 const data1= createContext();

function App() {
  const name= "hamail";
  const gender ="Male";

  return (
    <>
    <data.Provider value={name}>
    <data1.Provider value={gender}>

      <Com_a/>
      </data1.Provider>
      </data.Provider>
    </>
  )
}

export default App
export {data,data1}


