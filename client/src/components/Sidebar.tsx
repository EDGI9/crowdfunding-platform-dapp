import React, { JSXElementConstructor, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets/index.js';
import { navlinks } from '../constants/index.js';

interface SidebarProps {
  classes?: string, 
  name?: string, 
  imgUrl?: string, 
  isActive?: string,
  disabled?: boolean,
  handleClick?: () => void
}

const Icon: React.FC<SidebarProps> = ({ classes, name, imgUrl, isActive, disabled, handleClick }:SidebarProps) => (
  <div data-testid={`qa-sidebar_icon-${name}`} className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${classes}`} onClick={(event)=> disabled == null || disabled == true  ? event.preventDefault() : handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div data-testid={`qa-sidebar`} className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon classes="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl={logo} name='home' handleClick={()=> navigate('/')} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {
          //@ts-ignore
          navlinks.map((link) => {
            if (link.name == 'home') {
              return
            } else {
              return (
                <Icon 
                  key={link.name}
                  {...link}
                  isActive={isActive}
                  handleClick={() => {
                    if(!link.disabled) {
                      setIsActive(link.name);
                      navigate(link.link);
                    }
                  }}
                />
              )
            }

          })}
        </div>

        <Icon classes="bg-[#1c1c24] shadow-secondary" imgUrl={sun} name='sun' />
      </div>
    </div>
  )
}

export default Sidebar