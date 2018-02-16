
import * as React from "react"

export const IconDigg: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--digg ${props.addClass} ${props.className}`
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
                    <g><path d="M6.4 8.1h3.9v19.1H0V13.6h6.4V8.1zm0 15.9v-7.2H4V24h2.4zm5.5-10.4v13.6h4V13.6h-4zm0-5.5V12h4V8.1h-4zm5.6 5.5h10.3v18.3H17.5v-3.1h6.4v-1.6h-6.4V13.6zM23.9 24v-7.2h-2.4V24h2.4zm5.5-10.4h10.4v18.3H29.4v-3.1h6.4v-1.6h-6.4V13.6zM35.8 24v-7.2h-2.4V24h2.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconDigg.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconDigg;
