import './SideBar.css';

import React, { useState } from 'react'

const SideBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className='sidebar'>
      
    </div>
  )
}

export default SideBar
