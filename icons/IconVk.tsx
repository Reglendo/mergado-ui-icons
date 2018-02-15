
import * as React from "react"

export const IconVk: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--vk ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M39.8 12.2q.5 1.3-3.1 6.1-.5.7-1.4 1.8-1.6 2-1.8 2.7-.4.8.3 1.7.3.4 1.6 1.7h.1q3 2.8 4 4.6.1.1.1.3t.2.5 0 .8-.5.5-1.3.3l-5.3.1q-.5.1-1.1-.1t-1.1-.5l-.4-.2q-.7-.5-1.5-1.4t-1.4-1.6-1.3-1.2-1.1-.3q-.1 0-.2.1t-.4.3-.4.6-.4 1.1-.1 1.6q0 .3-.1.5t-.1.4l-.1.1q-.4.4-1.1.5h-2.4q-1.5.1-3-.4t-2.8-1.1-2.1-1.3-1.5-1.2l-.5-.5-.6-.6q-.4-.4-1.4-1.9T5.4 23t-2.6-4.4T.1 13q-.1-.3-.1-.6t0-.3l.1-.1q.3-.4 1.2-.4l5.7-.1q.2.1.5.2t.3.2h.1q.3.2.5.7.4 1 1 2.1t.8 1.7l.3.6q.6 1.3 1.2 2.2t1 1.4.9.8.7.3.5-.1q.1 0 .1-.1t.3-.5.3-.9.2-1.7 0-2.6q-.1-.9-.2-1.5t-.3-1l-.1-.2q-.5-.7-1.8-.9-.3-.1.1-.5t.8-.7q1.1-.5 5-.5 1.7.1 2.8.3.4.1.7.3t.4.5.2.7.1.9 0 1.1-.1 1.5 0 1.7v.9q0 .6-.1 1t.1.8.3.8.4.6h.4q.2 0 .5-.2t.8-.7 1.1-1.4 1.4-2.2q1.2-2.2 2.2-4.7l.2-.4q.1-.2.3-.2l.1-.1.3-.1h6.4q.8-.1 1.3 0t.7.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconVk.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
