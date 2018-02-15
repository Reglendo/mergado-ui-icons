
import * as React from "react"

export const IconArrowCircleLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrow-circle-left ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M31.6 21.4v-2.8q0-.6-.5-1t-1-.5H18.9l4.3-4.2q.4-.4.4-1t-.4-1l-2.1-2q-.4-.4-1-.4t-1 .4L9 19q-.4.4-.4 1t.4 1l10.1 10.1q.4.4 1 .4t1-.4l2.1-2q.4-.4.4-1t-.4-1l-4.3-4.2h11.2q.6 0 1-.5t.5-1zm5.7-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconArrowCircleLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
