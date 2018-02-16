
import * as React from "react"

export const IconCss3: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--css3 ${props.addClass} ${props.className}`
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
                    <g><path d="M6.1 2.9h33.6l-5.9 29.7-18 6-15.5-6 1.6-7.9h6.6l-.7 3.2 9.5 3.6 10.8-3.6 1.5-7.5H2.7L4 13.7h26.9l.9-4.2h-27z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCss3.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCss3;
