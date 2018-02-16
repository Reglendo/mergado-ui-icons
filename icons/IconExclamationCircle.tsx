
import * as React from "react"

export const IconExclamationCircle: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--exclamation-circle ${props.addClass} ${props.className}`
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
                    <g><path d="M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zM23 30.7v-4.2q0-.4-.2-.6t-.5-.2H18q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm0-7.7l.4-13.8q0-.3-.3-.5-.2-.1-.5-.1h-4.9q-.3 0-.5.1-.3.2-.3.4l.4 13.9q0 .2.2.4t.6.2h4.1q.3 0 .5-.2t.3-.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconExclamationCircle.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconExclamationCircle;
