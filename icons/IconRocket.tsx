
import * as React from "react"

export const IconRocket: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--rocket ${props.addClass} ${props.className}`
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
                    <g><path d="M33.1 10q0-.9-.6-1.5T31 7.9t-1.5.6-.6 1.5.6 1.5 1.5.6 1.5-.6.6-1.5zm5-6.4q0 5.5-1.6 9.6t-5.7 8q-1.8 1.8-4.4 4l-.4 8.4q0 .4-.4.6l-8.5 5q-.2.1-.4.1-.3 0-.5-.2l-1.4-1.4q-.3-.4-.2-.8l1.9-6.1-6.3-6.3-6.1 1.9h-.2q-.4 0-.6-.2l-1.4-1.4q-.4-.4-.1-.9l5-8.5q.2-.4.6-.4l8.4-.4q2.2-2.6 4-4.4 4.2-4.2 8-5.8t9.6-1.5q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconRocket.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconRocket;
