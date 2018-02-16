
import * as React from "react"

export const IconAlignRight: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--align-right ${props.addClass} ${props.className}`
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
                    <g><path d="M40 30v2.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h37.2q.5 0 1 .4t.4 1zm0-8.6v2.9q0 .6-.4 1t-1 .4H10q-.6 0-1-.4t-.4-1v-2.9q0-.5.4-1t1-.4h28.6q.6 0 1 .4t.4 1zm0-8.5v2.8q0 .6-.4 1t-1 .4H4.3q-.6 0-1-.4t-.4-1v-2.8q0-.6.4-1t1-.5h34.3q.6 0 1 .5t.4 1zm0-8.6v2.8q0 .6-.4 1t-1 .5H12.9q-.6 0-1-.5t-.5-1V4.3q0-.6.5-1t1-.4h25.7q.6 0 1 .4t.4 1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconAlignRight.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconAlignRight;
