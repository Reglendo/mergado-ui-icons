
import * as React from "react"

export const IconCaretUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--caret-up ${props.addClass} ${props.className}`
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
                    <g><path d="M31.4 27.1q0 .6-.5 1t-1 .5h-20q-.6 0-1-.5t-.4-1 .4-1l10-10q.4-.4 1-.4t1 .4l10 10q.5.5.5 1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCaretUp.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCaretUp;
