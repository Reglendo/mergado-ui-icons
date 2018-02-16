
import * as React from "react"

export const IconChevronCircleUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--chevron-circle-up ${props.addClass} ${props.className}`
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
                    <g><path d="M29 25.4l2.3-2.3q.4-.4.4-1t-.4-1L21.1 11q-.4-.4-1-.4t-1 .4L9 21.1q-.4.5-.4 1t.4 1l2.3 2.3q.4.4 1 .4t1-.4l6.8-6.8 6.9 6.8q.4.4 1 .4t1-.4zm8.3-5.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconChevronCircleUp.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconChevronCircleUp;
