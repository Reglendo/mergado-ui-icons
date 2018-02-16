
import * as React from "react"

export const IconThumbsDown: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--thumbs-down ${props.addClass} ${props.className}`
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
                    <g><path d="M7.7 12.9q0 .5-.4 1t-1 .4q-.6 0-1-.4t-.4-1q0-.6.4-1.1t1-.4q.6 0 1 .4t.4 1.1zm3.6 11.4V10q0-.6-.4-1t-1-.4H3.4q-.6 0-1 .4T2 10v14.3q0 .6.4 1t1 .4h6.5q.5 0 1-.4t.4-1zM36.5 21q1.2 1.3 1.2 3.3 0 1.7-1.3 3t-3 1.3h-6.2q.1.3.2.5t.3.5.2.4q.4.8.6 1.3t.4 1.3.2 1.7v.9q0 .4-.1 1t-.2 1.1-.6 1-.9.9-1.3.6-1.9.2q-.5 0-1-.4-.4-.5-.7-1.1t-.5-1.2-.2-1.4q-.2-.9-.3-1.3t-.4-1.1-.7-1.1q-.8-.7-2.3-2.6-1.1-1.5-2.2-2.7t-1.7-1.4q-.6 0-1-.4t-.4-1V10q0-.6.4-1t1-.4q.8-.1 3.6-1 1.7-.6 2.7-.9t2.7-.6 3.2-.4h2.9q2.9.1 4.4 1.8 1.3 1.5 1.1 4 .8.8 1.2 2.1.3 1.4 0 2.6 1 1.4.9 3.1 0 .7-.3 1.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconThumbsDown.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconThumbsDown;
