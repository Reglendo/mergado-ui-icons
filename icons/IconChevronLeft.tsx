
import * as React from "react"

export const IconChevronLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--chevron-left ${props.addClass} ${props.className}`
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
                    <g><path d="M31.1 6.7L19.3 18.6l11.8 11.8q.5.4.5 1t-.5 1l-3.7 3.7q-.4.5-1 .5t-1-.5L8.9 19.6q-.5-.4-.5-1t.5-1L25.4 1q.5-.4 1-.4t1 .4l3.7 3.7q.5.4.5 1t-.5 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconChevronLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
