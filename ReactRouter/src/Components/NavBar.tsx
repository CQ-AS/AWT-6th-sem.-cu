import {NavLink} from 'react-router'

export function NavBar(){
    const navstyle=({isActive}:{isActive:boolean})=>{
        return{
            fontWeight:isActive? 'bold':'normal',
            textDecoration:isActive? "none":"underline"
        }
    }
    return(
        <>
         {/* <nav>
        <Link to="/">Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </nav> */}

        <nav>
            <NavLink style={navstyle} to='/'>Home</NavLink>
            <NavLink  style={navstyle} to='/about'>About</NavLink>
            <NavLink  style={navstyle} to='/contact'>Contact</NavLink>
            <NavLink  style={navstyle} to='/student'>Student</NavLink>
             <NavLink  style={navstyle} to='/count'>Count</NavLink>
              <NavLink  style={navstyle} to='/counter'>Counter</NavLink>
        </nav>
        </>
    )
}