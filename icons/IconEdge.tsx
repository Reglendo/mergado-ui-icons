
import * as React from "react"

export const IconEdge: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--edge ${props.addClass} ${props.className}`
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
                    <g><path d="M1.5 17.7h.1q.3-2.8 1.3-5.3t2.5-4.9 3.8-3.9 5-2.6 6.1-1q5.2 0 9.3 2.4t6.5 6.7q2.4 4.2 2.4 9.9v4.2H13.3q.1 2.5 1.2 4.3t3.1 2.7 4.2 1.3 4.8.1 4.6-1.1 3.9-1.9v8.5q-2.1 1.2-5.1 2t-7 .9-7.1-1.2q-4.2-1.7-6.9-5.6t-2.8-8.3q-.1-5.4 2.5-9.2t7.2-6q-1 1.4-1.7 2.8t-1 3.6h14.1q.2-1.7-.1-3.1t-1.1-2.3-1.6-1.5-1.8-.9-1.6-.5-1.3-.1l-.5-.1q-3 .1-5.8 1t-5 2.4-3.9 3.1-3.1 3.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconEdge.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
