
import * as React from "react"

export const IconEnvelope: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--envelope ${props.addClass} ${props.className}`
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
                    <g><path d="M40 15.8v17.8q0 1.4-1 2.5t-2.6 1H3.6q-1.5 0-2.6-1t-1-2.5V15.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3.9 2.1 1.5t2.1 1 2.5.6q1.2 0 2.5-.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-.9 2.2-1.9zm0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-.2.1-.9.6t-1.2.9-1.2.7-1.3.6-1.1.2q-.5 0-1.1-.2t-1.3-.6-1.2-.7-1.2-.9-.9-.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-.9-2.6-2.6T0 9.8Q0 8 .9 6.9t2.7-1.2h32.8q1.5 0 2.5 1.1T40 9.3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconEnvelope.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconEnvelope;
