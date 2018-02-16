
import * as React from "react"

export const IconHSquare: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--h-square ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.textFirst && textEl }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M31.6 30V10q0-.6-.5-1t-1-.4h-2.8q-.6 0-1 .4t-.4 1v7.1H14.4V10q0-.6-.4-1t-1-.4h-2.9q-.5 0-1 .4t-.4 1v20q0 .6.4 1t1 .4H13q.6 0 1-.4t.4-1v-7.1h11.5V30q0 .6.4 1t1 .4h2.8q.6 0 1-.4t.5-1zm5.7-20.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconHSquare.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconHSquare;
