
import * as React from "react"

export const IconBattery2: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--battery-2 ${props.addClass} ${props.className}`
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
                    <g><path d="M4.5 26.7V13.3h15.7v13.4H4.5zm33.6-12.3q.9 0 1.6.7t.6 1.5v6.8q0 .9-.6 1.5t-1.6.7v2.8q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2V11.6q0-1.2.8-2t2-.8h32.5q1.1 0 2 .8t.8 2v2.8zm0 9v-6.8h-2.2v-5q0-.2-.2-.4t-.4-.2H2.8q-.2 0-.4.2t-.2.4v16.8q0 .3.2.4t.4.2h32.5q.2 0 .4-.2t.2-.4v-5h2.2z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBattery2.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBattery2;
