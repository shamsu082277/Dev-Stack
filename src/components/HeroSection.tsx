const HeroSection = () => {
    return (
        <div className="container mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div>
                        <h1 className="text-5xl font-bold ">Build Your Ideal <br></br><span className="hero-text-gradient-color">Development Stack</span> </h1>
                        <p className="py-6">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-primary py-5 min-w-48 rounded-lg explore-btn">Explore Technologies</button>
                            <button className="btn py-5 rounded-lg min-w-48"> Learn More</button>
                        </div>
                    </div>
                    <img
                        alt="Tailwind CSS hero component"
                        src="/src/assets/banner-stack.png"
                    />
                </div>
        </div>
    );
};

export default HeroSection;