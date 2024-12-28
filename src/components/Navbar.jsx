import React, { useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from "react-icons/ri"
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avator from "../data/avatar.jpg"
import { Cart, Chat, Notification, UserProfile } from "."
import { useStateContext } from '../context/ContexProvider'


const NavButton = ({ title, customeFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customeFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 r-2 t-2' />
        {icon}
    </button>
  </TooltipComponent>
)

function Navbar() {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) { 
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 mx-6 relative'>
      <NavButton title="Menu" customeFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />
      <div className='flex'>
        <NavButton
          title="Cart"
          customeFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03c9d7"
          customeFunc={() => handleClick('chat')}

          color="blue"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notofications"
          dotColor="#03c9d7"
          customeFunc={() => handleClick('notification')}

          color="blue"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
            <img
              className='w-8 h-8 rounded-full'
              src={avator}
              alt="avator"
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='font-bold text-gray-400 ml-1 text-14'>Vincent</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar