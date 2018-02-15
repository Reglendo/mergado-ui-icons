
import * as React from "react"

export const IconChild: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--child ${props.addClass} ${props.className}`
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
                    <g><path d="M32 12.2l-6.5 6.6v18.3q0 1.1-.7 1.8t-1.8.7-1.8-.7-.7-1.8v-8.5h-1.4v8.5q0 1.1-.8 1.8t-1.7.7-1.8-.7-.7-1.8V18.8l-6.5-6.6q-.7-.6-.7-1.5t.7-1.5 1.5-.6 1.5.6l5.1 5.1h8.2L29 9.2q.6-.6 1.5-.6t1.5.6.6 1.5-.6 1.5zm-7.2-3.6q0 2-1.5 3.5t-3.5 1.5-3.6-1.5-1.4-3.5T16.2 5t3.6-1.4T23.3 5t1.5 3.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconChild.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
