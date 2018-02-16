
import * as React from "react"

export const IconCompress: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--compress ${props.addClass} ${props.className}`
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
                    <g><path d="M20.1 21.4v10q0 .6-.4 1t-1 .5-1-.5l-3.2-3.2-7.4 7.4q-.2.3-.5.3t-.5-.3l-2.6-2.5q-.2-.2-.2-.5t.2-.5l7.4-7.5-3.2-3.2q-.4-.4-.4-1t.4-1 1-.4h10q.6 0 1 .4t.4 1zM37 6.4q0 .3-.2.5l-7.4 7.5 3.2 3.2q.4.4.4 1t-.4 1-1 .4h-10q-.6 0-1-.4t-.5-1v-10q0-.6.5-1t1-.5 1 .5l3.2 3.2 7.4-7.4q.2-.3.5-.3t.5.3l2.6 2.5q.2.2.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCompress.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCompress;
