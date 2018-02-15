
import * as React from "react"

export const IconTextWidth: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--text-width ${props.addClass} ${props.className}`
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
                    <g><path d="M4.8 2.9l1.2.6q.3.1 4.7.1 1 0 3-.1t2.9 0h12.3q2.9 0 5.5.1.8 0 1.3-.7h1.5q.1 2.5.1 7.5 0 1.8-.1 2.4-.9.3-1.5.4-.6-1-1.2-2.8-.1-.2-.3-1.1t-.3-1.6-.2-.9q-.2-.2-.6-.4h-3.5q-1.4 0-2.3-.1t-2.1.1-2.2.1q-.2 1.8-.2 3.1l.1 3.4v-1.2 14.5q0 .7.3 1.6.8.4 2.7.9t2.7.8q.1.9.1 1.2 0 .3-.1.6h-.7q-1.7.1-4.9-.2t-4.6-.2q-1.1 0-3.4.2t-3.4.2v-1.3q.3-.6 1.3-1t2.2-.6 1.8-.7q.1-.3.2-1.6t.2-3.3 0-3.4 0-3.4 0-2q0-.2-.1-.5t0-.5V8.8q0-.9-.1-1.5t-.1-.7q-.3-.3-3.6-.3-.9 0-3.7.3t-3 .5q-.5.3-.8 1.6t-.7 2.5-1 1.2q-.9-.6-1.2-1V2.9zm27.4 28.6q.3 0 1 .4t1.3 1 1.3 1.1.8.6q.6.5.6 1.1t-.6 1.1q-.1.1-.8.7t-1.3 1.1-1.3.9-1 .4q-.3 0-.4-.2t-.2-.6-.1-.8 0-.7.1-.5H8.7v.5q0 .4.1.7t-.1.8-.2.6-.5.2q-.2 0-.9-.4t-1.3-.9-1.3-1.1-.8-.7q-.6-.5-.6-1.1t.6-1.1q.1-.1.8-.7t1.3-1 1.3-1 .9-.4q.3 0 .5.2t.2.7.1.7-.1.7 0 .5h22.9q0-.1-.1-.5t0-.7.1-.7.2-.7.4-.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconTextWidth.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
