
import * as React from "react"

export const IconEnvelopeO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--envelope-o ${props.addClass} ${props.className}`
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
                    <g><path d="M37.1 33.6V16.4q-.7.8-1.5 1.5-6 4.6-9.5 7.5-1.1 1-1.9 1.5T22.3 28t-2.3.6q-1.1 0-2.3-.6t-1.9-1.1-1.9-1.5q-3.5-2.9-9.5-7.5-.8-.7-1.5-1.5v17.2q0 .3.2.5t.5.2h32.8q.3 0 .5-.2t.2-.5zm0-23.5V9l-.2-.2-.2-.2H3.6q-.3 0-.5.2t-.2.5q0 3.7 3.2 6.3 4.3 3.4 9 7.1.1.1.8.7t1 .8 1 .7 1.1.6 1 .2q.5 0 1-.2t1.1-.6 1-.7 1-.8.8-.7q4.7-3.7 9-7.1 1.2-.9 2.2-2.6t1-2.9zm2.9-.8v24.3q0 1.4-1 2.5t-2.6 1H3.6q-1.5 0-2.6-1t-1-2.5V9.3q0-1.5 1.1-2.5t2.5-1.1h32.8q1.5 0 2.6 1.1t1 2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconEnvelopeO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconEnvelopeO;
