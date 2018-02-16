
import * as React from "react"

export const IconUser: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--user ${props.addClass} ${props.className}`
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
                    <g><path d="M35.9 31.4q0 2.6-1.6 4.2T30 37.1H10.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2.1-2.3t.3-2.5.6-2.4.9-2.2 1.4-1.8T9.7 19t2.5-.4q.2 0 1 .5t1.6 1 2.4 1.1 3 .5 3-.5 2.4-1.1 1.7-1 .9-.5q1.4 0 2.5.4t1.9 1.2T34 22t.9 2.2.6 2.4.4 2.5 0 2.3zm-7.1-20q0 3.6-2.5 6.1T20.2 20t-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconUser.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconUser;
