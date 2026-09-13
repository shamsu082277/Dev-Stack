import type { Dispatch, SetStateAction } from "react";
import type IStack from "../types/stackType";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

interface StackProps {
    stack: IStack[];
    selectedStack: IStack[];
    setSelectedStack: Dispatch<SetStateAction<IStack[]>>;
}

const Stack = ({
    stack,
    selectedStack,
    setSelectedStack,
}: StackProps) => {

    const handleStack = (item: IStack) => {

        // Check if already added
        const alreadyAdded = selectedStack.some(
            (technology) => technology.id === item.id
        );

        if (alreadyAdded) {
            toast.warning(`${item.name} is already added!`);
            return;
        }

        // Add technology
        setSelectedStack([...selectedStack, item]);

        toast.success(`${item.name} added successfully!`);
    };

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {stack.map((item: IStack) => {

                const isSelected = selectedStack.some(
                    (technology) => technology.id === item.id
                );

                return (
                    <div
                        key={item.id}
                        className="w-full max-w-sm overflow-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                        {/* Top */}
                        <div className="flex items-start justify-between">

                            <img
                                src={item.icon}
                                alt={item.name}
                                className="h-12 w-12 object-contain"
                            />

                            <span
                                className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                                    item.badge === "Popular" ||
                                    item.badge === "Modern"
                                        ? "border-sky-100 bg-sky-50 text-sky-500"
                                        : item.badge === "Essential" ||
                                          item.badge === "Fast"
                                        ? "border-green-100 bg-green-50 text-green-500"
                                        : item.badge === "AI Ready"
                                        ? "border-orange-100 bg-orange-50 text-orange-500"
                                        : item.badge === "NoSQL"
                                        ? "border-purple-100 bg-purple-50 text-purple-500"
                                        : item.badge === "Top SQL"
                                        ? "border-pink-100 bg-pink-50 text-pink-500"
                                        : "border-yellow-100 bg-yellow-50 text-yellow-500"
                                }`}
                            >
                                {item.badge}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="mt-6">

                            <h3 className="hero-text-gradient-color text-2xl font-bold">
                                {item.name}
                            </h3>

                            <p className="mt-3 min-h-18 text-sm leading-6 text-slate-500">
                                {item.description}
                            </p>

                        </div>

                        {/* Divider */}
                        <div className="my-4 border-t border-slate-100"></div>

                        {/* Info */}
                        <div className="flex items-center justify-between text-sm">

                            <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
                                {item.category}
                            </span>

                            <span className="text-slate-500">
                                {item.difficulty}
                            </span>

                            <span className="flex items-center gap-1 font-medium text-slate-700">
                                <FaStar className="text-yellow-400" />
                                {item.rating}
                            </span>

                        </div>

                        {/* Button */}
                        <button
                            onClick={() => handleStack(item)}
                            disabled={isSelected}
                            className={`mt-5 w-full rounded-lg py-3 text-sm font-medium text-white transition ${
                                isSelected
                                    ? "cursor-not-allowed bg-gray-400"
                                    : "gradient-btn cursor-pointer"
                            }`}
                        >
                            {isSelected
                                ? "✓ Added to Stack"
                                : "Add to Stack"}
                        </button>

                    </div>
                );
            })}

        </div>
    );
};

export default Stack;