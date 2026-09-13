const Footer = () => {
    return (
        <div className="container mx-auto mt-10">
            <footer className="footer sm:footer-horizontal text-base-content py-15">
                <aside>
                    <img src="/src/assets/logo-text.png" alt="" />
                    <p className="text-gray-400">
                        Curated tools, technologies, and resources for developers building <br></br> modern software.
                    </p>
                    <h4 className="flex font-semibold gap-4"><a href="">GitHub</a><a href="">Twitter</a><a href="">LinkedIn</a></h4>
                </aside>
                <nav>
                    <h6 className="font-semibold text-lg">Product</h6>
                    <a className="link link-hover text-gray-400">Home</a>
                    <a className="link link-hover text-gray-400">Tecchnologies</a>
                    <a className="link link-hover text-gray-400">Projects</a>
                </nav>
                <nav>
                    <h6 className="font-semibold text-lg">Company</h6>
                    <a className="link link-hover text-gray-400">About</a>
                    <a className="link link-hover text-gray-400">Contact</a>
                    <a className="link link-hover text-gray-400">Careers</a>
                </nav>
                <nav>
                    <h6 className="font-semibold text-lg">Legal</h6>
                    <a className="link link-hover text-gray-400">Privacy policy</a>
                    <a className="link link-hover text-gray-400">Terms of Service</a>
                </nav>
            </footer>
            <hr className="border-gray-300"/>
            <div className="flex justify-between gap-5 py-5">
                <p className="text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-5 text-gray-400">
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;