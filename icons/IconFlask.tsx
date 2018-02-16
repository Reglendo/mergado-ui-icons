
import * as React from "react"

export const IconFlask: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--flask ${props.addClass} ${props.className}`
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
                    <g><path d="M35.6 32.3q1.2 2 .5 3.4t-3.2 1.4H7.2q-2.4 0-3.1-1.4t.5-3.4l11.2-17.7V5.7h-1.4q-.6 0-1-.4t-.5-1 .5-1 1-.4h11.4q.6 0 1 .4t.4 1-.4 1-1 .4h-1.4v8.9zM18.2 16.1l-6.1 9.6H28l-6.1-9.6-.4-.7V5.7h-2.9v9.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconFlask.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconFlask;
