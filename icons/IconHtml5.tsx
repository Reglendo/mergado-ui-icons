
import * as React from "react"

export const IconHtml5: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--html5 ${props.addClass} ${props.className}`
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
                    <g><path d="M29.7 13.3l.4-3.9H10.3l1.1 11.9h13.7l-.5 5.1-4.4 1.2-4.4-1.2-.3-3.1h-3.9l.5 6.2 8.1 2.2h.1l8-2.2 1.1-12.1H15l-.3-4.1h15zM4.5 2.9h31.4L33.1 35l-12.9 3.6L7.4 35z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconHtml5.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconHtml5;
