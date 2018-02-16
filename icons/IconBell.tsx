
import * as React from "react"

export const IconBell: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--bell ${props.addClass} ${props.className}`
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
                    <g><path d="M20.4 37.9q0-.4-.4-.4-1.3 0-2.3-1t-.9-2.2q0-.4-.4-.4t-.3.4q0 1.6 1.1 2.8t2.8 1.1q.4 0 .4-.3zm18.2-6.5q0 1.2-.9 2t-2 .9h-10q0 2.4-1.7 4T20 40t-4-1.7-1.7-4h-10q-1.2 0-2-.9t-.9-2q1.1-.9 2.1-1.9t1.9-2.7T7 23.3t1.1-4.6.5-5.8q0-3.4 2.6-6.3T18 3q-.1-.4-.1-.9 0-.8.6-1.5T20 0t1.5.6.6 1.5q0 .5-.1.9 4.2.6 6.8 3.6t2.6 6.3q0 3.1.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBell.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBell;
