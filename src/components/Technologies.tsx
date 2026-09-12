import { use } from "react";
import type IStack from "../types/stackType";
import Stack from "./Stack";

interface StackProps{
    stackPromise: Promise<IStack[]>
}

const Technologies = ({stackPromise}:StackProps) => {
    const stack = use(stackPromise)

    return (
        <div className="container mx-auto">
            <div>
                <h2 className="text-5xl font-bold pb-3">Explore the <span className="text-[#EC4899]">Technologies</span> </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            {/* Technologies card */}
            <div>
            <Stack stack = {stack}></Stack>
            </div>
        </div>
    );
};

export default Technologies;