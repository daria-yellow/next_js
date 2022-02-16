import Link from "next/link";

const Header = () => {
    return (
        <div className="menu-main">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/forecast">Weather</Link></li>
        </ul>
        </div>
        )
}

export default Header;