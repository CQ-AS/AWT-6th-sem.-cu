import {Link,Outlet} from 'react-router'
export function Student(){
    return(
        <>
        <h1>Student Component</h1>
        <nav>
            <Link to='marks'>Student Marks</Link>
            <Link to='details'>Student Details</Link>
        </nav>
        <Outlet/>
        </>
    )
}