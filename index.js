import { React } from "react";
import "*./styles.css";

const Eyes = ({x, y, onClick}) => (
    <g onClick={onClick}>
        <circle cx={x-18} cy={y} r={20} fill="white"/>
        <circle cx={x+18} cy={y} r={20} fill="white"/>
        <circle cx={x-10} cy={y} r={10} fill="black"/>
        <circle cx={x+10} cy={y} r={10} fill="black"/>
    </g>
);

const Body = ({x, y, colour}) => (
    <g>
        <circle cx={x} cy={y} r={50} fill={colour}/>
        <rect x={x-50} y={y} width={100} height={80} fill={colour}/>
    </g>
);

const Ghost = ({x, y, colour, onClick}) => (
    <g onClick={onClick}>
        <Body x={x} y={y} colour={colour}/>
        <Eyes x={x} y={y}/>
    </g>
);

export default function App() {
    return (
        <div className="App">
            <svg viewBox="0 0 200 200">
            <Ghost x={60} y={60} colour="blue" onClick={() => alert("hi!")} />
            <Ghost x={140} y={100} colour="red" onClick={() => alert("hello")} />
            </svg>
        </div>
    )
}
