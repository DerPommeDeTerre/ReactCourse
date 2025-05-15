
import React from 'react'

export const Header = () => {
  return (
      <header className='header'>
        <img src="src/assets/react.svg" className='image-element' alt="React Logo"/>
        <nav>
            <ul className="nav-list">
                <li className="list-element">Pricing</li>
                <li className="list-element">About</li>
                <li className="list-element">Contact</li>
            </ul>
        </nav>
      </header>
  )
}

