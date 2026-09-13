const HeroSection = () => {
    return (
        <div className="">
                {/* <div className="hero-content flex-col lg:flex-row p-0"> */}
                <div className="hero-content flex-col p-8 lg:p-0 lg:flex-row container mx-auto justify-between">
                    
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold ">Build Your Ideal <br></br><span className="hero-text-gradient-color">Development Stack</span> </h1>
                        <p className="py-6 text-gray-400 w-2/3 mx-auto lg:mx-0">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-primary py-5 min-w-48 rounded-lg gradient-btn">Explore Technologies</button>
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