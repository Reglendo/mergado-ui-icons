
import * as React from "react"

export const IconHandPointerO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--hand-pointer-o ${props.addClass} ${props.className}`
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
                    <g><path d="M15.8 2.9q-1.2 0-2 .8t-.9 2v20l-3.3-4.5Q8.6 20 7.2 20q-1.2 0-2 .8t-.8 2.1q0 .9.5 1.7L13.5 36q.9 1.1 2.3 1.1h16q.5 0 .9-.3t.5-.7l2.1-8.2q.5-2.2.5-4.4v-4.8q0-.9-.6-1.6t-1.6-.7-1.5.7-.6 1.5h-.7v-1.4q0-1.1-.7-1.8t-1.8-.8q-1 0-1.8.8t-.7 1.7v1.5h-.7v-2q0-1.3-.9-2.1t-2-.9q-1.2 0-2 .8t-.8 2v2.2h-.8V5.8q0-1.2-.8-2.1t-2-.8zm0-2.9q2.4 0 4 1.7t1.7 4.1v5q.5-.1.7-.1 2.2 0 3.9 1.6 1-.5 2.2-.5 2.5 0 4.1 1.9.6-.1 1.2-.1 2.1 0 3.6 1.5t1.4 3.6v4.8q0 2.6-.6 5l-2 8.3q-.4 1.4-1.6 2.3t-2.6.9h-16q-1.4 0-2.6-.6t-2-1.7L2.6 26.3q-1.1-1.5-1.1-3.4 0-2.4 1.7-4.1t4-1.7q1.6 0 2.9.8V5.7q0-2.4 1.6-4T15.8 0zm2.8 31.4v-8.5h-.7v8.5h.7zm5.8 0v-8.5h-.8v8.5h.8zm5.7 0v-8.5h-.7v8.5h.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconHandPointerO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconHandPointerO;
