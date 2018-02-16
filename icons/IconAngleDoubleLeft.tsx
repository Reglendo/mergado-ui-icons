
import * as React from "react"

export const IconAngleDoubleLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--angle-double-left ${props.addClass} ${props.className}`
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
                    <g><path d="M22 30.7q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L9.2 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.3.2.5t-.2.6L13 21.4l8.8 8.8q.2.2.2.5zm8.6 0q0 .3-.3.5l-1.1 1.1q-.2.3-.5.3t-.5-.3L17.8 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.2-.2.5-.2t.5.2l1.1 1.1q.3.3.3.5t-.3.6l-8.7 8.7 8.7 8.8q.3.2.3.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconAngleDoubleLeft.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconAngleDoubleLeft;
