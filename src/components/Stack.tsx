import { use } from "react";

const Stack = ({stackPromise}) => {
    console.log(stackPromise);
    const stack = use(stackPromise)
    console.log(stack);
    return (
        <div>
        </div>
    );
};

export default Stack;