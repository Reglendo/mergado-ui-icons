
import * as React from "react"

export const IconAngleDoubleDown: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--angle-double-down ${props.addClass} ${props.className}`
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
                    <g><path d="M31 19.3q0 .3-.2.5L20.4 30.2q-.3.2-.5.2t-.6-.2L8.9 19.8q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.3.5-.3t.5.3l8.8 8.7 8.7-8.7q.3-.3.5-.3t.6.3l1.1 1.1q.2.2.2.5zm0-8.6q0 .3-.2.5L20.4 21.6q-.3.3-.5.3t-.6-.3L8.9 11.2q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.2.5-.2t.5.2l8.8 8.8 8.7-8.8q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconAngleDoubleDown.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconAngleDoubleDown;
