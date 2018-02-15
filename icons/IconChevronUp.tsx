
import * as React from "react"

export const IconChevronUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--chevron-up ${props.addClass} ${props.className}`
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
                    <g><path d="M37.6 29.7l-3.7 3.7q-.5.4-1 .4t-1-.4L20 21.5 8.2 33.4q-.5.4-1.1.4t-1-.4l-3.7-3.7q-.4-.4-.4-1t.4-1L19 11.1q.4-.4 1-.4t1 .4l16.6 16.6q.4.4.4 1t-.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconChevronUp.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
