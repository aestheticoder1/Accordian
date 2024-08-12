import React, { useState } from 'react'
import data from './assets/data'

const App = () => {
  const [select,setSelect] = useState(null);
  const [multiSelect,setMultiSelect] = useState(false);
  const [multipleItems,setMultipleItems] = useState([]);

  function handleSingleSelect(curr_id) {
    if(select == curr_id)
      setSelect(null);
    else 
    setSelect(curr_id);
  }

  function handleMultiSelect(curr_id) {
    const arr = [...multipleItems]

    if(arr.indexOf(curr_id) == -1)
      arr.push(curr_id);
    else
    arr.splice(arr.indexOf(curr_id), 1);

    setMultipleItems(arr);
  }

  return (
    <div className='wrapper w-full h-screen flex flex-col'>

      <h1 className='w-full h-10 text-center text-2xl font-bold mt-4'>Accordian</h1>

      <button onClick={()=>setMultiSelect(!multiSelect)} className='px-4 py-2 border-2 border-black hover:text-white hover:bg-orange-600 font-bold w-fit mx-auto mt-8 mb-4'>Enable Multi-Selection</button>

      <div className='accordian h-full w-2/3 mx-auto flex flex-col justify-center'>
        {
          data.length > 0 && 
          data.map((item,idx)=>{
            return(
              <div key={idx} className='accordion-item bg-orange-700 mb-4 w-1/2 mx-auto text-white p-6'>
                <h3 onClick={multiSelect ? ()=>handleMultiSelect(item.id) : ()=>handleSingleSelect(item.id)} className='accordion-title font-bold mb-4 cursor-pointer'>{item.question}</h3>
                {
                  multiSelect ? 
                  multipleItems.indexOf(item.id)!=-1 &&
                  <div className='accordion-content'>
                    {item.answer}
                  </div> : 
                  select == item.id && 
                  <div className='accordion-content'>
                    {item.answer}
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App