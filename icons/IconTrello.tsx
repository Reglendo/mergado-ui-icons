
import * as React from "react"

export const IconTrello: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--trello ${props.addClass} ${props.className}`
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
                    <g><path d="M18.7 30V7.1q0-.3-.2-.5t-.5-.2H7.3q-.3 0-.5.2t-.2.5V30q0 .3.2.5t.5.2H18q.3 0 .5-.2t.2-.5zm15-8.6V7.1q0-.3-.2-.5t-.5-.2H22.3q-.3 0-.5.2t-.2.5v14.3q0 .3.2.5t.5.2H33q.3 0 .5-.2t.2-.5zm3.6-17.1v31.4q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTrello.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTrello;
