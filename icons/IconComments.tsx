
import * as React from "react"

export const IconComments: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--comments ${props.addClass} ${props.className}`
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
                    <g><path d="M31.4 17.1q0 3.1-2.1 5.8T23.6 27t-7.9 1.6q-1.9 0-3.9-.4-2.8 2-6.2 2.9-.8.2-1.9.3h-.1q-.3 0-.5-.2t-.2-.4v-.4l.1-.2v-.1l.1-.1.1-.1.1-.1q.1-.1.5-.6t.6-.6.5-.7.6-.8.4-1q-2.7-1.6-4.3-4t-1.6-5q0-3.1 2.1-5.7t5.7-4.2 7.9-1.5 7.9 1.5 5.7 4.2 2.1 5.7zm8.6 5.8q0 2.6-1.6 5t-4.3 3.9l.4 1q.2.5.6.8t.5.7.6.7.5.5l.1.1.1.1.1.1q.1.1 0 .2l.1.1v.4q0 .3-.3.5t-.5.1q-1.1-.1-1.9-.3-3.4-.9-6.2-2.9-2 .4-3.9.4-6.1 0-10.6-3 1.3.1 2 .1 3.6 0 6.9-1t5.9-2.9q2.8-2 4.3-4.7t1.5-5.7q0-1.7-.5-3.4 2.9 1.6 4.5 4t1.7 5.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconComments.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconComments;
