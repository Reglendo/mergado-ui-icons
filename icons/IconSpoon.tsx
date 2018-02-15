
import * as React from "react"

export const IconSpoon: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--spoon ${props.addClass} ${props.className}`
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
                    <g><path d="M27.2 11.8q0 3.2-1.3 5.4t-3.4 3l1.1 18.4q0 .6-.4 1t-1 .4h-4.3q-.6 0-1-.4t-.3-1l1-18.4q-2.1-.8-3.4-3t-1.3-5.4q0-2.9 1-5.6t2.6-4.4T20.1 0t3.5 1.8 2.7 4.4.9 5.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconSpoon.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
