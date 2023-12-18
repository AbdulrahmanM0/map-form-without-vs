import React from 'react'
import { useState } from 'react'

const Form = () => {
  const incommingData = {name:'',age:'',email:''}
  const [data,setData] = useState(incommingData)

  const handleChange = (e) => {
    return (
      setData(
        previos => ({
          ...previos,
            [e.target.name]:e.target.value
        })
      )
    )
  }

  return (
    <div>
    {incommingData ? 
       <>
      {
        Object.keys(incommingData).map( input => (
          <input name={input} type='text' onChange={handleChange} />
        ) )
      }
       </>
      : <div>No data</div>}
    </div>
  )
}
export default Form
