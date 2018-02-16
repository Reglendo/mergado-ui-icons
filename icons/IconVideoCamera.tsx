
import * as React from "react"

export const IconVideoCamera: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--video-camera ${props.addClass} ${props.className}`
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
                    <g><path d="M40 7.9v24.2q0 1-.9 1.4-.3.1-.5.1-.6 0-1-.5l-9-8.9v3.7q0 2.6-1.9 4.5t-4.6 1.9H6.4q-2.6 0-4.5-1.9T0 27.9V12.1q0-2.6 1.9-4.5t4.5-1.9h15.7q2.7 0 4.6 1.9t1.9 4.5v3.7l9-8.9q.4-.5 1-.5.2 0 .5.1.9.4.9 1.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconVideoCamera.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconVideoCamera;
