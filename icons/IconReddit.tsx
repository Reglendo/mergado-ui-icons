
import * as React from "react"

export const IconReddit: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--reddit ${props.addClass} ${props.className}`
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
                    <g><path d="M24.4 26.1q.4.3 0 .6-1.3 1.4-4.4 1.4t-4.4-1.4q-.4-.3 0-.6.1-.2.3-.2t.3.2q1.1 1 3.8 1 2.7 0 3.8-1.1.1-.1.3-.1t.3.1zM17.6 22q0 .8-.6 1.4t-1.4.6-1.4-.6-.6-1.4q0-.8.6-1.4t1.4-.6 1.4.6.6 1.4zm8.8 0q0 .8-.6 1.4t-1.4.6-1.4-.6-.6-1.4.6-1.4 1.4-.6 1.4.6.6 1.4zm5.6-2.7q0-1.1-.8-1.8t-1.9-.8-1.9.8q-2.9-2-6.9-2.2L21.9 9l4.4 1q0 .8.6 1.4t1.4.6 1.4-.6.6-1.4-.6-1.4-1.4-.6q-1.2 0-1.8 1.1L21.6 8q-.4-.1-.6.4l-1.5 6.9q-4 .2-6.9 2.2-.8-.8-1.9-.8-1.1 0-1.9.8T8 19.3q0 .8.4 1.5t1.1.9q-.1.6-.1 1.3 0 3.2 3.1 5.4t7.5 2.3q4.4 0 7.6-2.3t3.1-5.4q0-.7-.2-1.3.7-.3 1.1-1t.4-1.4zm8 .7q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconReddit.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconReddit;
