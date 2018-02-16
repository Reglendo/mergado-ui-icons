
import * as React from "react"

export const IconPrint: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--print ${props.addClass} ${props.className}`
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
                    <g><path d="M10.1 34.3h20v-5.7h-20v5.7zm0-14.3h20v-8.6h-3.6q-.9 0-1.5-.6t-.6-1.5V5.7H10.1V20zm25.7 1.4q0-.5-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .5 1-.5.4-1zm2.8 0v9.3q0 .3-.2.5t-.5.2h-5V35q0 .9-.6 1.5t-1.5.6H9.4q-.9 0-1.6-.6T7.2 35v-3.6h-5q-.3 0-.5-.2t-.2-.5v-9.3q0-1.7 1.3-3t3-1.3h1.4V5q0-.9.6-1.5t1.6-.6h15q.9 0 1.9.4T28 4.4l3.4 3.4q.6.6 1.1 1.7t.4 1.9v5.7h1.5q1.7 0 3 1.3t1.2 3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconPrint.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconPrint;
