import React, { useState } from 'react'

const App = () => {

  const [formda,setFormdata]=useState([])

  const hand=(event)=>{
     event.preventDefault()
    // const {name,value} = event.target

    // setFormdata({...formda,[name]:value})
    const r=document.getElementById('d')
    const d= new FormData(r)
    const amt=d.get('amt')
    const rea=d.get('reason')
    const c=d.get('c')
    const gg=d.get('ra')

    const x=0
    const neew = "hello";


  }
      console.log(formda)


  return (
    <div>
      <form id='d'onSubmit={hand} >
        <input type="button" name='reason' />
        <input type="number" name='amt' />
        <input type="text" name="c"  />
        <input type="radio" value="dd" name='ra' />
        <input type="radio" name='ra' value='ee'/>
        <button type='submit'>sub</button>
      </form>
    </div>
  )
}

export default App