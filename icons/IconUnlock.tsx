
import * as React from "react"

export const IconUnlock: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--unlock ${props.addClass} ${props.className}`
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
                    <g><path d="M38.6 12.9v5.7q0 .6-.4 1t-1 .4h-1.4q-.6 0-1-.4t-.4-1v-5.7q0-2.4-1.7-4.1t-4.1-1.7-4 1.7-1.7 4.1v4.2h2.2q.9 0 1.5.7t.6 1.5v12.8q0 .9-.6 1.6t-1.5.6H3.6q-.8 0-1.5-.6t-.6-1.6V19.3q0-.9.6-1.5t1.5-.7h15v-4.2q0-4.2 3-7.1t7-2.9 7.1 2.9 2.9 7.1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconUnlock.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconUnlock;
