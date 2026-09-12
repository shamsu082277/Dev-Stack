import Stack from "./Stack";
const Technologies = ({stackPromise}) => {
    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-5xl font-bold pb-3">Explore the <span className="text-[#EC4899]">Technologies</span> </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            {/* Technologies card */}
            <div>
            <Stack stackPromise = {stackPromise}></Stack>
            </div>
        </div>
    );
};

export default Technologies;