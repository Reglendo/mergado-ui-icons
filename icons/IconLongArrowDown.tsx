
import * as React from "react"

export const IconLongArrowDown: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--long-arrow-down ${props.addClass} ${props.className}`
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
                    <g><path d="M28.6 29q.2.4-.1.8l-7.9 8.6q-.2.2-.5.2t-.5-.2l-7.9-8.6q-.3-.4-.1-.8.2-.4.6-.4h5V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v27.9h5q.5 0 .7.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconLongArrowDown.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconLongArrowDown;
