
import * as React from "react"

export const IconTwitch: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--twitch ${props.addClass} ${props.className}`
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
                    <g><path d="M20 9.7v9.7h-3.2V9.7H20zm8.9 0v9.7h-3.3V9.7h3.3zm0 17l5.6-5.7V3.2H7.9v23.4h7.3v4.9l4.8-4.9h8.9zM37.8 0v22.6l-9.7 9.7h-7.3L16 37.1h-4.9v-4.8H2.2V6.5L4.7 0h33.1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTwitch.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTwitch;
