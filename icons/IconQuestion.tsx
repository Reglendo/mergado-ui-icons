
import * as React from "react"

export const IconQuestion: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--question ${props.addClass} ${props.className}`
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
                    <g><path d="M23.2 28v5.4q0 .4-.3.6t-.6.3H17q-.4 0-.7-.3t-.2-.6V28q0-.3.2-.6t.7-.3h5.3q.4 0 .6.3t.3.6zm7.1-13.4q0 1.2-.4 2.3t-.8 1.7-1.2 1.3-1.3 1-1.3.8q-.9.5-1.6 1.4t-.6 1.5q0 .4-.2.8t-.7.3h-5.3q-.4 0-.6-.4t-.2-.8v-1q0-1.9 1.4-3.5t3.2-2.5q1.3-.6 1.9-1.2t.5-1.7q0-.9-1-1.7t-2.4-.7q-1.4 0-2.4.7-.8.5-2.4 2.5-.3.4-.7.4-.2 0-.5-.2L10 12.8q-.3-.2-.3-.5t.1-.6q3.5-6 10.3-6 1.8 0 3.6.7T27 8.3t2.4 2.8.9 3.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconQuestion.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconQuestion;
