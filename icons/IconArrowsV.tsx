
import * as React from "react"

export const IconArrowsV: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrows-v ${props.addClass} ${props.className}`
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
                    <g><path d="M27.2 7.1q0 .6-.4 1t-1 .5h-2.9v22.8h2.9q.6 0 1 .5t.4 1-.4 1l-5.7 5.7q-.4.4-1 .4t-1-.4l-5.7-5.7q-.5-.5-.5-1t.5-1 1-.5h2.8V8.6h-2.8q-.6 0-1-.5t-.5-1 .5-1L19.1.4q.4-.4 1-.4t1 .4l5.7 5.7q.4.5.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconArrowsV.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
