
import * as React from "react"

export const IconMoonO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--moon-o ${props.addClass} ${props.className}`
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
                    <g><path d="M31.7 29.1q-1.2.2-2.5.2-4 0-7.5-2t-5.5-5.5-2-7.5q0-4.3 2.3-8-4.5 1.4-7.3 5.1T6.4 20q0 2.9 1.1 5.5t3 4.6 4.6 3 5.5 1.2q3.3 0 6.1-1.4t5-3.8zm4.5-1.9q-2.1 4.5-6.3 7.2t-9.3 2.7q-3.4 0-6.6-1.3t-5.5-3.7-3.6-5.4T3.5 20q0-3.4 1.3-6.5t3.5-5.4 5.2-3.7T20 2.9q1-.1 1.4.8.4 1-.4 1.7-1.9 1.7-2.9 4t-1 4.9q0 3.3 1.6 6.1t4.4 4.4 6.1 1.6q2.6 0 5.1-1.1.9-.4 1.6.3.3.3.4.7t-.1.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconMoonO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconMoonO;
