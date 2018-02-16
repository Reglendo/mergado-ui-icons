
import * as React from "react"

export const IconStarHalf: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--star-half ${props.addClass} ${props.className}`
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
                    <g><path d="M29.1.7v29.9l-10 5.3q-.5.2-.9.2-.5 0-.7-.3t-.3-.8q0-.1.1-.4l1.9-11.2-8.1-7.9q-.6-.6-.6-1.1 0-.8 1.3-1L23 11.8l5-10.2q.4-.9 1.1-.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconStarHalf.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconStarHalf;
