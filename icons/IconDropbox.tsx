
import * as React from "react"

export const IconDropbox: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--dropbox ${props.addClass} ${props.className}`
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
                    <g><path d="M9 15.8l11 6.8-7.6 6.3-11-7.1zm22 12.4v2.4l-11 6.5-10.9-6.5v-2.4l3.3 2.1L20 24v-.1.1l7.7 6.3zM12.4 2.6L20 9 9 15.8l-7.6-6zM31 15.8l7.6 6L27.7 29 20 22.6zM27.7 2.6l10.9 7.2-7.6 6L20 9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconDropbox.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconDropbox;
