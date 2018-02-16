
import * as React from "react"

export const IconArrowCircleUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--arrow-circle-up ${props.addClass} ${props.className}`
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
                    <g><path d="M31.7 20q0-.6-.4-1L21.1 8.9q-.4-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l2.1 2q.4.4 1 .4t1-.4l4.2-4.2V30q0 .6.4 1t1 .4h2.9q.5 0 1-.4t.4-1V18.8l4.2 4.2q.4.4 1 .4t1-.4l2.1-2q.4-.4.4-1zm5.6 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconArrowCircleUp.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconArrowCircleUp;
