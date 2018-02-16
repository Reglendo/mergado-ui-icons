
import * as React from "react"

export const IconSpaceShuttle: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--space-shuttle ${props.addClass} ${props.className}`
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
                    <g><path d="M11.3 24.1q-2 1.1-4.9 1.1H4.1v-1.1H2.9q-.2 0-.4-.4t-.2-1.1q0-.4.2-.9-1.1 0-1.8-.2t-.7-.3.7-.4 1.8-.2q-.2-.5-.2-.9 0-.6.2-1t.4-.5h1.2v-1.1h2.3q2.9 0 4.9 1.1h20.3q.7.2 1.9.4t1.5.2q1.6.3 2.7.8t1.5.8.4.8-.4.7-1.5.9-2.7.7q-.3.1-1.5.3t-1.9.3H11.3zm20.4-4.6q1 .6 1 1.7t-1 1.6l1.5.6q1.2-.9 1.2-2.2t-1.2-2.3zm-20.3 4.9h18.5q-4 .7-8.3 1.4-1.1 0-2.1.5t-1.5.8l-.5.5-5.3 5.2q-.4.5-1.2.8t-1.7.4H7.6l-1.7-8.5h.5q2.9 0 5-1.1zm-5-7.6h-.5l1.7-8.5h1.7q.9 0 1.7.4t1.2.8l5.3 5.3q.1 0 .2.1t.5.5.9.5 1.2.4 1.3.2l8.3 1.5H11.4q-2.1-1.2-5-1.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconSpaceShuttle.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconSpaceShuttle;
