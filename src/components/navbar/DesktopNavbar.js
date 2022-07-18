import React from 'react'
import { navbarData } from '../../utils/data'

import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import DesktopNavbarComponent from './DesktopNavbarComponent'
import DesktopNavbarWrapper from '../../wrappers/DesktopNavbarWrapper'
import Logo from '../Logo'

const DesktopNavbar = () => {
  return (
    <DesktopNavbarWrapper>
      <div className='nav-container'>
        <div className='logo-container'>
          <Logo />
        </div>

        <div className='navbar'>
          <ul>
            {navbarData.map((item) => {
              return <DesktopNavbarComponent key={item.id} {...item} />
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <ul>
            <li>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={facebook} alt='' />
              </a>
            </li>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={instagram} alt='' />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={linkedin} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DesktopNavbarWrapper>
  )
}

export default DesktopNavbar
