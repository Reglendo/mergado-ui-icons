
import * as React from "react"

export const IconHandPaperO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--hand-paper-o ${props.addClass} ${props.className}`
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
                    <g><path d="M21.6 2.9q-1 0-1.7.7t-.8 1.8V20h-.7V8.2q0-1-.7-1.7t-1.8-.8-1.7.8-.8 1.7v17.5L10 21.1Q9.1 20 7.7 20q-1.2 0-2 .8t-.8 2.1q0 .9.5 1.7L14 36q.9 1.1 2.3 1.1h15.3q.8 0 1.4-.4t.8-1.3l1.7-9q.1-.8.1-1.4V13.9q0-1-.8-1.7t-1.7-.8-1.8.8-.7 1.7V20h-.7V8.2q0-1-.8-1.7t-1.7-.8-1.8.8-.7 1.7V20h-.8V5.4q0-1.1-.7-1.8t-1.8-.7zm0-2.9q1.6 0 2.8.8t2 2.1h1q2.2 0 3.7 1.5t1.6 3.8v.4q2.4-.1 4 1.4t1.7 3.9V25q0 .9-.2 1.9l-1.6 9q-.4 1.8-1.8 2.9T31.6 40H16.3q-1.4 0-2.6-.6t-2-1.7L3.1 26.3Q2 24.8 2 22.9q0-2.4 1.7-4.1t4-1.7q1.8 0 2.9.8V8.2q0-2.2 1.5-3.8t3.8-1.5h1q.7-1.3 1.9-2.1t2.8-.8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconHandPaperO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconHandPaperO;
