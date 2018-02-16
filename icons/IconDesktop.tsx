
import * as React from "react"

export const IconDesktop: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--desktop ${props.addClass} ${props.className}`
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
                    <g><path d="M37.2 22V4.7q0-.3-.2-.4t-.5-.2H3.3q-.2 0-.4.2t-.2.4V22q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5zm2.7-17.3v22.6q0 1.4-1 2.4t-2.4.9H25.2q0 .8.4 1.6t.6 1.5.4.9q0 .6-.4 1t-1 .3H14.6q-.5 0-.9-.3t-.4-1q0-.3.3-.9t.7-1.5.3-1.6H3.3q-1.3 0-2.3-.9t-1-2.4V4.7q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconDesktop.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconDesktop;
