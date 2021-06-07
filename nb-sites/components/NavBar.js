import Link from 'next/link'
//nabar for navigation between form to create a person and view current person list

const NavBar = () => {

    return (
        <ul id='nav'>
            <li>
                <Link href='/'>
                    <a>Create a Person</a>
                </Link>
            </li>

            <li>
                <Link href='/people'>
                    <a>Person List</a>
                </Link>
            </li>

        </ul>
    )
}

export default NavBar;