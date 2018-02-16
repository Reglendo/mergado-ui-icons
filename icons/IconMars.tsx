
import * as React from "react"

export const IconMars: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--mars ${props.addClass} ${props.className}`
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
                    <g><path d="M35.9 2.9q.5 0 1 .4t.4 1v9.3q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5V7.7l-8.5 8.6q2.8 3.5 2.8 8 0 2.6-1 5T25 33.4t-4.2 2.7-4.9 1-5-1-4.1-2.7T4 29.3t-1-5 1-5 2.8-4.1 4.1-2.8 5-1q4.5 0 8 2.8l8.5-8.5h-5.8q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h9.3zm-20 31.4q4.1 0 7-2.9t3-7.1-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7.1 7.1 2.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconMars.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconMars;
