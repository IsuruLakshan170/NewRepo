import { Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/authenticationSlice';
import './Nev.css';
const Navbar = () => {
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();

    return <Nav className='navbar' style={{ backgroundColor: 'rgb(78, 200, 209)' }} >
        <h1 className='navbarheader' style={{ fontFamily: 'Brush Script MT, cursive' }}>SCC HIGH SCHOOL</h1>
        {isLoggedIn
            ?<div className='newTopic'>
                <Button  id="btn" variant='link' href='/homepage' onClick={() => { dispatch(logout()) }}>Home</Button>
                <Button id="btn" variant='link' href='/signin' onClick={() => { dispatch(logout()) }}>Log out</Button>
                <Button id="btn" variant='link' href='/support'>Support</Button>
                <Button id="btn" variant='link' href='/dashboard'>DashBoard</Button>

            </div>      
                   

            : <div style={{ display: 'flex' }} className='newTopic'>
                <NavLink id="homebtn" to="/homepage" style={{ marginLeft: '1rem' }}>Home</NavLink>
                <NavLink id="homebtn" to="/signup" style={{ marginLeft: '1rem' }}>Sign up</NavLink>
                <NavLink id="homebtn" to="/signin" style={{ marginLeft: '1rem' }}>Sign in</NavLink>
                <NavLink id="homebtn" to="/addmin" style={{ marginLeft: '1rem' }}>Addmin</NavLink>

            </div>
            }



    </Nav >
};

export default Navbar;

