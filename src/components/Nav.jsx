import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show,setshow] = useState(false)

    useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scroll>'600px')
})
    })
  return (
    <div className='nav'>
        <img width={'150px'} src="" alt="" />
    </div>
  )
}

export default Nav