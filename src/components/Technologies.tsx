import { use, useState } from "react";
import type IStack from "../types/stackType";
import Stack from "./Stack";
import MyStack from "./MyStack";

interface StackProps {
    stackPromise: Promise<IStack[]>;
}

const Technologies = ({ stackPromise }: StackProps) => {
    const stack = use(stackPromise);

    // Store all selected technologies here
    const [selectedStack, setSelectedStack] = useState<IStack[]>([]);

    return (
        <div className="container mx-auto">
            <div className="mb-10">
                <h2 className="pb-3 text-4xl font-bold">
                    Explore the{" "}
                    <span className="text-[#EC4899]">Technologies</span>
                </h2>

                <p>
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Technologies + Your Stack */}
            <div className="grid grid-cols-12 justify-center gap-10">

                {/* Technology Cards */}
                <div className="col-span-12 md:col-span-9">
                    <Stack
                        stack={stack}
                        selectedStack={selectedStack}
                        setSelectedStack={setSelectedStack}
                    />
                </div>

                {/* Your Stack */}
                <div className="col-span-12 md:col-span-3">
                    <MyStack
                        selectedStack={selectedStack}
                        setSelectedStack={setSelectedStack}
                    />
                </div>

            </div>
        </div>
    );
};

export default Technologies;