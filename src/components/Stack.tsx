import type IStack from "../types/stackType";
import { FaStar } from "react-icons/fa";
interface StackProps {
    stack: IStack[]
}
const Stack = ({ stack }: StackProps) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                stack.map((item:IStack) => {
                    return <div key={item.id} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-auto">

                        {/* Top */}
                        <div className="flex items-start justify-between">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="h-12 w-12 object-contain"
                            />

                            <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-500">
                                {item.badge}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-bold hero-text-gradient-color">
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
                        <button className="cursor-pointer mt-5 w-full rounded-lg gradient-btn py-3 text-sm font-medium text-white transition">
                            Add to Stack
                        </button>

                    </div>
                })
            }
        </div>
    );
};

export default Stack;