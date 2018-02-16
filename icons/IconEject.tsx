
import * as React from "react"

export const IconEject: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--eject ${props.addClass} ${props.className}`
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
                    <g><path d="M3.3 21.9L19.2 6q.4-.4 1-.4t1 .4L37 21.9q.4.4.3.7t-.7.3H3.7q-.5 0-.7-.3t.3-.7zm32.6 12.4H4.5q-.6 0-1.1-.4t-.4-1v-5.8q0-.5.4-1t1.1-.4h31.4q.6 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconEject.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconEject;
