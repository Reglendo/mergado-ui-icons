
import * as React from "react"

export const IconPinterest: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--pinterest ${props.addClass} ${props.className}`
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
                    <g><path d="M37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3q-2.4 0-4.8-.7 1.3-2 1.7-3.6.2-.8 1.2-4.7.5.8 1.7 1.5t2.5.6q2.7 0 4.8-1.5t3.3-4.2 1.2-6.1q0-2.5-1.4-4.7T26.5 10t-5.7-1.4q-2.4 0-4.4.7T13 11t-2.5 2.4T9 16.3t-.4 3q0 2.4.8 4.1t2.7 2.5q.6.3.8-.5.1-.1.2-.6t.2-.7q.1-.5-.3-1-1.1-1.3-1.1-3.3 0-3.4 2.3-5.8t6.1-2.5q3.4 0 5.3 1.9t1.9 4.7q0 3.8-1.6 6.5T22 27.2q-1.3 0-2.2-.9t-.5-2.4q.2-.8.6-2.1t.7-2.3.2-1.6q0-1.2-.6-1.9t-1.7-.7q-1.4 0-2.3 1.2t-1 3.2q0 1.6.6 2.7l-2.2 9.4q-.4 1.5-.3 3.9-4.6-2-7.5-6.3T3 20q0-4.7 2.3-8.6t6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconPinterest.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconPinterest;
