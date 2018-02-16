
import * as React from "react"

export const IconExchange: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--exchange ${props.addClass} ${props.className}`
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
                    <g><path d="M40 26.4v4.3q0 .3-.2.5t-.5.2H8.6v4.3q0 .3-.2.5t-.5.2q-.3 0-.6-.2L.2 29.1q-.2-.2-.2-.5t.2-.5l7.1-7.2q.2-.2.6-.2.2 0 .5.2t.2.5v4.3h30.7q.3 0 .5.2t.2.5zm0-12.1q0 .3-.2.5l-7.1 7.1q-.2.2-.6.2-.2 0-.5-.2t-.2-.5v-4.3H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30.7V7.1q0-.3.2-.5t.5-.2q.3 0 .6.3l7.1 7.1q.2.2.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconExchange.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconExchange;
