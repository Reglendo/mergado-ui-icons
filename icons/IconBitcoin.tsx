
import * as React from "react"

export const IconBitcoin: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--bitcoin ${props.addClass} ${props.className}`
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
                    <g><path d="M31.1 14.3q.3 4-3 5.7 2.6.7 3.9 2.3t1 4.8q-.1 1.6-.7 2.8t-1.4 2-2.2 1.3-2.7.8-3.3.3V40h-3.4v-5.6h-2.7V40h-3.5v-5.7H6.3l.6-4.1h2.5q1.1 0 1.3-1.1v-9h.4-.4v-6.4q-.3-1.6-2-1.6H6.3V8.5h6.8V2.9h3.5v5.5q1.8-.1 2.7-.1V2.9h3.4v5.6q1.8.1 3.2.5t2.5 1 1.8 1.7.8 2.6zm-4.8 12.2q0-.9-.4-1.5t-.8-1-1.3-.7-1.5-.4-1.6-.2-1.5-.1-1.5.1-1 0v7.5h3q.9 0 1.3-.1t1.3-.2 1.2-.3 1.1-.4.9-.7.5-.9.2-1.1zm-1.6-10.7q0-.7-.3-1.3t-.7-.9-1.1-.6-1.2-.4-1.4-.2-1.3 0-1.2 0-.8 0v6.8q.1 0 .7.1t1.1 0 1.1-.1 1.2-.1 1.2-.3 1-.4.9-.6.6-.8.2-1.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBitcoin.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBitcoin;
