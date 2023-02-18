import './BottomNavbar.css';

import React from 'react'
import { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { RiUser5Line } from 'react-icons/ri';

const BottomNavbar = () => {

    const navigate = useNavigate();
    const [activeTabs, setActiveTabs] = useState('home');
    // useEffect(() => {
    //     switch (activeTabs) {
    //         case 'home':
    //             navigate('/')
    //             break;
    //         case 'explore':
    //             navigate('/explore')
    //             break;
    //         case 'chat':
    //             navigate('/chat')
    //             break;
    //         case 'account':
    //             navigate('/profile/1')
    //             break;
    //         default:
    //             // console.log("default applied")
    //             break;
    //     }
    // }, [activeTabs, navigate])

    return (
        <div className='bottomNavbar'>
            <Link to = "/" className="bnTab">
                {activeTabs === 'home' ?
                    <RiHomeSmile2Fill className='navLogos'
                        onClick={()=> setActiveTabs('home')}
                    />:
                    <RiHomeSmile2Line className='navLogos'
                        onClick={()=> setActiveTabs('home')}
                    />
                }
            </Link>
            <Link to = "/explore" className="bnTab">
                {activeTabs === 'explore' ?
                    <RiSearchEyeFill className='navLogos'
                        onClick={()=> setActiveTabs('explore')}
                    />:
                    <BiSearchAlt className='navLogos'
                        onClick={()=> setActiveTabs('explore')}
                    />
                }
            </Link>
            <Link to = "/chat" className="bnTab">
                {activeTabs === 'chat' ?
                    <AiFillHeart className='navLogos'
                        onClick={()=> setActiveTabs('chat')}
                    />:
                    <AiOutlineHeart className='navLogos'
                        onClick={()=> setActiveTabs('chat')}
                    />
                }
            </Link>
            <Link to = "/profile/1" className="bnTab">
                {activeTabs === 'account' ?
                    <RiUser5Fill className='navLogos'
                        onClick={()=> setActiveTabs('account')}
                    />:
                    <RiUser5Line className='navLogos'
                        onClick={()=> setActiveTabs('account')}
                    />
                }
            </Link>
            
        </div>
    )
}

export default BottomNavbar
