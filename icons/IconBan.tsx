
import * as React from "react"

export const IconBan: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--ban ${props.addClass} ${props.className}`
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
                    <g><path d="M32.3 19.9q0-3.6-2-6.6L13.5 30.2q3.1 1.9 6.6 1.9 2.5 0 4.8-.9t3.8-2.6 2.6-3.9 1-4.8zM10 26.6L26.8 9.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4T8 19.9q0 3.6 2 6.7zm27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3T8 32.1t-3.6-5.5T3 19.9t1.4-6.7T8 7.8t5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBan.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBan;
