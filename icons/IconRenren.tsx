
import * as React from "react"

export const IconRenren: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--renren ${props.addClass} ${props.className}`
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
                    <g><path d="M28.3 35q-3.8 2.1-8.2 2.1-4.4 0-8.2-2.1 3.1-1.9 5.2-4.7t3-5.9q.8 3.2 2.9 5.9t5.3 4.7zM17.2 3.2V14q0 5.6-2.8 10.3T7 31.1Q3 26.3 3 20q0-4.1 1.9-7.8t5.1-6 7.2-3zM37.3 20q0 6.3-4.1 11.1-4.5-2.2-7.3-6.8T23 14V3.2q4 .6 7.3 3t5.1 6 1.9 7.8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconRenren.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconRenren;
