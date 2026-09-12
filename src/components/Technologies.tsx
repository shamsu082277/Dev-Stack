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
            <div className="mb-10">
                <h2 className="text-4xl font-bold pb-3">Explore the <span className="text-[#EC4899]">Technologies</span> </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            </div>
            {/* Technologies card */}
            <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9"><Stack stack = {stack}></Stack></div>
            <div className="col-span-3">
                <div className="rounded-2xl border border-slate-200 shadow-sm p-6">
                    <h3 className="text-2xl font-semibold">Your Stack</h3>
                    <p>No technologies selected yet.</p>
                    <div className=" border border-slate-400 border-dashed p-5 rounded-2xl mt-4 text-center">
                        <p>Your stack is empty.</p>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Technologies;