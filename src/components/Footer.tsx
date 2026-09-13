const Footer = () => {
    return (
        <div className="mx-auto mt-10 max-w-sm md:container">
            <footer className="footer sm:footer-horizontal text-base-content py-8 md:py-15">
                <aside className="flex flex-col justify-center items-center md:items-baseline gap-4">
                    <img src="/assets/logo-text.png" alt="" />
                    <p className="text-gray-400 w-3/4 text-center md:text-left">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <h4 className="flex font-semibold gap-4"><a href="">GitHub</a>.<a href="">Twitter</a>.<a href="">LinkedIn</a></h4>
                </aside>
                <nav className="hidden md:grid">
                    <h6 className="font-semibold text-lg">Product</h6>
                    <a className="link link-hover text-gray-400">Home</a>
                    <a className="link link-hover text-gray-400">Tecchnologies</a>
                    <a className="link link-hover text-gray-400">Projects</a>
                </nav>
                <nav className="hidden md:grid">
                    <h6 className="font-semibold text-lg">Company</h6>
                    <a className="link link-hover text-gray-400">About</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                    <a className="link link-hover text-gray-400">Careers</a>
                </nav>
                <nav className="hidden md:grid">
                    <h6 className="font-semibold text-lg">Legal</h6>
                    <a className="link link-hover text-gray-400">Privacy policy</a>
                    <a className="link link-hover text-gray-400">Terms of Service</a>
                </nav>
            </footer>
            <hr className="border-gray-300"/>
            <div className="flex justify-between gap-5 py-5">
                <p className="text-gray-400 text-sm md:text-lg">© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-5 text-gray-400 text-sm md:text-lg">
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;