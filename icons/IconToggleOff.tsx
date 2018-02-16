
import * as React from "react"

export const IconToggleOff: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--toggle-off ${props.addClass} ${props.className}`
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
                    <g><path d="M22.4 20q0-2-.8-3.9T19.4 13t-3.1-2.2-3.9-.7-3.8.7T5.4 13t-2.1 3.1-.8 3.9.8 3.9T5.4 27t3.2 2.2 3.8.7 3.9-.7 3.1-2.2 2.2-3.1.8-3.9zm14.9 0q0-2-.8-3.9T34.4 13t-3.2-2.2-3.9-.7h-7.5q2.3 1.7 3.7 4.3t1.3 5.6-1.3 5.6-3.7 4.3h7.5q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9zm2.5 0q0 2.5-1 4.8t-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20t1-4.8 2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconToggleOff.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconToggleOff;
