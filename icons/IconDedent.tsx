
import * as React from "react"

export const IconDedent: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--dedent ${props.addClass} ${props.className}`
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
                    <g><path d="M8.6 12.1V25q0 .3-.2.5t-.5.2q-.4 0-.6-.2L.9 19.1q-.2-.2-.2-.5t.2-.5l6.4-6.5q.2-.2.6-.2.2 0 .5.2t.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconDedent.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconDedent;
