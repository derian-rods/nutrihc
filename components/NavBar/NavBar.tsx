import React, { MouseEventHandler, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/picture/logo.png'



const NavBar: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false)

    const handleMenu = (): void  => {
        setToggle(!toggle);
    } 
    return(
        <>
            <nav className='navbar'>
                <div className='navbar__items'>
                    <ul className='navbar__listitems'>
                        <li className='navbar__item'>
                            <Link href='/'>
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li className='navbar__item'>
                            <Link href='/'>
                                <a>Sobre Mí</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='navbar__brading'>
                    <Image className='navbar__logo' width={220} height={220} src={Logo} alt='Luisa Maria Fernandez Rodriguez'></Image>
                </div>
                <div className='navbar__items'>
                    <ul className='navbar__listitems'>
                        <li className='navbar__item'>
                            <Link href='/'>
                                <a>Consulta</a>
                            </Link>
                        </li>
                        <li className='navbar__item'>
                            <Link href='/'>
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={toggle ? 'navbar__menu close' : 'navbar__menu'  } id='navbar__menu' onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className={toggle ? 'dashbord-wrappers' : 'hidden'} hidden={toggle}>
                <div className='dashboard'>
                    <ul className='dashboard__listitems'>
                        <li className='dashboard__item'>
                            <Link href='/'>
                                <a>Inicio</a>
                            </Link>
                        </li>
                        <li className='dashboard__item'>
                            <Link href='/'>
                                <a>Sobre Mí</a>
                            </Link>
                        </li>
                        <li className='dashboard__item'>
                            <Link href='/'>
                                <a>Consulta</a>
                            </Link>
                        </li>
                        <li className='dashboard__item'>
                            <Link href='/'>
                                <a>Contacto</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default NavBar;