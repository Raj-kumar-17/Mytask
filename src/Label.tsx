import { FunctionComponent } from "react";


interface myprop {
    text: string;
}

const Mylabel: FunctionComponent<myprop> = ({text}) => {
    return (
        <div>
            <label>{text}</label>
        </div>
    )
}

export default Mylabel;