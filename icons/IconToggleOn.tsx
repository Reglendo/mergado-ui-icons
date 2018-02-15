
import * as React from "react"

export const IconToggleOn: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--toggle-on ${props.addClass} ${props.className}`
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
                    <g><path d="M0 20q0-2.5 1-4.8t2.6-4 4-2.6 4.8-1h14.9q2.6 0 4.9 1t3.9 2.6 2.7 4 1 4.8-1 4.8-2.7 4-3.9 2.6-4.9 1H12.4q-2.5 0-4.8-1t-4-2.6-2.6-4T0 20zm27.3 9.9q2 0 3.9-.7t3.2-2.2 2.1-3.1.8-3.9-.8-3.9-2.1-3.1-3.2-2.2-3.9-.7-3.8.7-3.2 2.2-2.1 3.1-.8 3.9.8 3.9 2.1 3.1 3.2 2.2 3.8.7z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconToggleOn.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
