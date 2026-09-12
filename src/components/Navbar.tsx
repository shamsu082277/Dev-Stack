const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <img src="/src/assets/hamburger.png" alt="" />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className="text-[#DB2777]">Home</a></li>
                    <li><a>Technologies</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                </div>
                <a href="/" className="hidden lg:flex"><img src="/src/assets/logo-text.png" alt="" /></a>
            </div>
            <div className="flex lg:hidden">
                <a href="/"><img src="/src/assets/logo-text.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li><a className="text-[#DB2777]">Home</a></li>
                    <li><a>Technologies</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <a href="/">Sign In</a>
                <a className="btn rounded-full text-white bg-[#DB2777] p-5 ">Button</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;