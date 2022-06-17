import React from 'react';
import CTA from './CTA'

import './header.css'

const Header = () => {
  return (
   <header>
    <div className="container header__container"></div>
    <h5>Hello I am</h5>
    <h1>Sean Luvuno</h1>
    <h5 className='text-light'>FullStack Developer</h5>

   </header>
  )
}

export default Header