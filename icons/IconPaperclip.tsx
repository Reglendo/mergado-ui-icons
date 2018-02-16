
import * as React from "react"

export const IconPaperclip: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--paperclip ${props.addClass} ${props.className}`
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
                    <g><path d="M35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3L7.1 17.5q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6L32.6 19q.3.2.3.5t-.7 1-1.1.7q-.2 0-.5-.2L17.1 7.4q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-.9t.9-2.4q0-1.8-1.4-3.2l-13-13q-.6-.5-1.3-.5-.7 0-1.1.4t-.4 1.1q0 .7.6 1.3l9.1 9.1q.2.3.2.5 0 .4-.7 1.1t-1 .7q-.3 0-.5-.3L14.3 19q-1.4-1.4-1.4-3.3t1.3-3.1 3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconPaperclip.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconPaperclip;
