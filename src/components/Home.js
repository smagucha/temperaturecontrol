import './home.css';
import React, {useState} from 'react'
function Home() {
  const [temp, settemp] = useState(37)
   const [color, setcolor] = useState('blue')


    const increasetemp = ()=>{
      if (temp===100) return;
       if (temp >= 37){
        setcolor('red')
      }
      settemp(temp +1)
    }
    const decreasetemp = ()=>{
      if (temp===-73) return;
      if (temp < 39){

        setcolor('blue')
      }
      settemp(temp -1) 
    }

  return (
    <div className="container">
        <div className='tempvalue' style={{background:color}}>
            {temp}°C
        </div>
        <div>
         {/* <button onClick={()=>settemp(temp +1)}>+</button>
          <button onClick={()=>settemp(temp -1)}>-</button>*/}
          <button onClick={()=>increasetemp()}>+</button>
          <button onClick={()=>decreasetemp()}>-</button>
        </div>
      
    </div>
  );
}

export default Home;