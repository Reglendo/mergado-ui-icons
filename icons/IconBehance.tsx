
import * as React from "react"

export const IconBehance: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--behance ${props.addClass} ${props.className}`
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
                    <g><path d="M35.9 9.2H26v2.4h9.9V9.2zM31 17.5q-1.8 0-2.9 1t-1.2 2.7h8q-.4-3.7-3.9-3.7zm.3 11.3q1.2 0 2.4-.6t1.4-1.7h4.3q-1.9 6-8.3 6-4.1 0-6.6-2.6t-2.4-6.7q0-4.1 2.5-6.7t6.5-2.7q2.7 0 4.7 1.3t3 3.5 1 4.8q0 .3-.1.9H26.9q0 2.2 1.2 3.3t3.2 1.2zm-25.9-1h5.7q4 0 4-3.2 0-3.5-3.9-3.5H5.4v6.7zm0-10.4h5.4q1.5 0 2.4-.7t.9-2.2q0-2.8-3.7-2.8h-5v5.7zM0 7.5h11.5q1.7 0 3 .3t2.5.9 1.7 1.9.7 3q0 3.5-3.4 5.1 2.2.6 3.4 2.2t1.1 4q0 1.4-.5 2.6t-1.3 2.1-1.9 1.3-2.3.8-2.6.3H0V7.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBehance.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
