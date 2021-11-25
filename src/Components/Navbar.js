import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../Images/dragon_age.png';

export default function Navbar() {
    return (
        <div>
            <a href='/'>
                <img src={logo} alt='dragon age logo'/>
            </a>
            <div id='navs'>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/'>?</Link>
            </div>
        </div>
    )
}