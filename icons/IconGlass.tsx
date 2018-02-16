
import * as React from "react"

export const IconGlass: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--glass ${props.addClass} ${props.className}`
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
                    <g><path d="M37.9 4.2q0 .7-.9 1.7L22.9 20v17.1H30q.6 0 1 .5t.4 1-.4 1-1 .4H10q-.6 0-1-.4t-.4-1 .4-1 1-.5h7.1V20L3 5.9q-.9-1-.9-1.7 0-.6.4-.9t.8-.4 1 0h32.4q.5 0 .8.4t.4.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconGlass.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconGlass;
