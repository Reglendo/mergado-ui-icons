
import * as React from "react"

export const IconGitlab: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--gitlab ${props.addClass} ${props.className}`
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
                    <g><path d="M2.3 15.8L20 38.4.6 24.4q-.4-.3-.5-.8t0-1l2.2-6.8zm10.3 0h14.8L20 38.4zM8.2 2.1l4.4 13.7H2.3L6.7 2.1q.2-.5.8-.5t.7.5zm29.5 13.7l2.2 6.8q.2.5 0 1t-.5.8L20 38.4l17.7-22.6zm0 0H27.4l4.4-13.7q.2-.5.7-.5t.8.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconGitlab.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
