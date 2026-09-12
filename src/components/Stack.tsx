import type IStack from "../types/stackType";

interface StackProps {
    stack: IStack[]
}
const Stack = ({stack}:StackProps) => {
    console.log(stack);
    return (
        <div>
            {
                stack.map((item)=>{
                    return <div key={item.id}>
                        {item.name}
                    </div>
                })
            }
        </div>
    );
};

export default Stack;