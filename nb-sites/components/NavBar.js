import Link from 'next/link'

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