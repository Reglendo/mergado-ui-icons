
import * as React from "react"

export const IconHeartO: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--heart-o ${props.addClass} ${props.className}`
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
                    <g><path d="M37.1 13.3q0-1.8-.4-3.2t-1.3-2.2-1.8-1.3-2.1-.7-2.2-.2-2.5.6-2.4 1.4-2 1.6-1.3 1.4q-.4.5-1.1.5t-1.1-.5q-.5-.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-.6-2.2.2-2.1.7-1.8 1.3-1.3 2.2-.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8zm2.9 0q0 4.9-5.1 10L21 36.7q-.4.4-1 .4t-1-.4L5.1 23.3l-.6-.6q-.4-.4-1.3-1.4t-1.5-2.2-1.2-2.7-.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8.4t2.7 1.3 2.1 1.6T20 7.7q.8-.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-.4q5 0 7.9 2.7t2.8 7.7z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconHeartO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
