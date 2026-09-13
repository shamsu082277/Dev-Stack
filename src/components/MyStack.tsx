import type { Dispatch, SetStateAction } from "react";
import type IStack from "../types/stackType";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

interface MyStackProps {
    selectedStack: IStack[];
    setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const MyStack = ({
    selectedStack,
    setSelectedStack,
}: MyStackProps) => {

    // Remove one stack
    const handleRemove = (id: string, name: string) => {

        const remainingStack = selectedStack.filter(
            (item) => item.id !== id
        );

        setSelectedStack(remainingStack);

        toast.info(`${name} removed from your stack.`);
    };

    // Remove all stacks
    const handleRemoveAll = () => {

        setSelectedStack([]);

        toast.info("All technologies removed.");
    };

    return (
        <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 p-6 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between">

                <div>
                    <h3 className="text-lg lg:text-2xl font-semibold">
                        Your Stack
                    </h3>

                    <p className="text-sm text-slate-500">
                        {selectedStack.length} Technology
                        {selectedStack.length !== 1 ? "ies" : ""} Selected
                    </p>
                </div>

            </div>
            {selectedStack.length === 0 && (
                <div className="mt-4 rounded-2xl border border-dashed border-slate-400 p-2 lg:p-5 text-center">
                    <p className="text-sm text-slate-500">
                        Your stack is empty.
                    </p>
                </div>
            )}

            {/* Selected Technologies */}
            {selectedStack.length > 0 && (
                <div className="mt-4 space-y-3">

                    {selectedStack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
                        >

                            {/* Technology Info */}
                            <div className="flex items-center gap-3">

                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="h-10 w-10 object-contain"
                                />

                                <div>
                                    <h4 className="font-medium">
                                        {item.name}
                                    </h4>

                                    <p className="text-xs text-slate-500">
                                        {item.category}
                                    </p>
                                </div>

                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={() =>
                                    handleRemove(item.id, item.name)
                                }
                                className="cursor-pointer rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                            >
                                <FaXmark />
                            </button>

                        </div>
                    ))}

                </div>
            )}
    {/* Remove All */}
                
                    {selectedStack.length > 0 && (
                        <div className="flex justify-center items-center p-2 rounded-xl border-2 text-lg  border-red-500
                        mt-5">
                    <button
                        onClick={handleRemoveAll}
                        className="cursor-pointer text-sm font-medium text-red-500 hover:text-red-600"
                    >
                        Remove All
                    </button>
                    </div>
                )}
                
        </div>
    );
};

export default MyStack;