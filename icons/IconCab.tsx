
import * as React from "react"

export const IconCab: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cab ${props.addClass} ${props.className}`
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
                    <g><path d="M35.4 20q1.8 0 3.1 1.3t1.3 3v7.5q0 .3-.2.4t-.5.2h-1.8v1.3q0 1.5-1.1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3H9.9v1.3q0 1.5-1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3H.6q-.3 0-.4-.2t-.2-.4v-7.5q0-1.8 1.3-3t3-1.3h.6l2-8.1q.5-1.9 2-3.1t3.5-1.2h2.5V3.2q0-.2.2-.4t.4-.2h8.7q.3 0 .5.2t.1.4v4.4h2.5q1.9 0 3.5 1.2t2 3.1l2.1 8.1h.5zM6.2 29.3q1.3 0 2.2-.9t.9-2.2-.9-2.2-2.2-.9T4 24t-.9 2.2.9 2.2 2.2.9zM10 20h19.7L28 13.1q0-.2-.3-.4t-.4-.2H12.4q-.2 0-.4.2t-.3.4zm23.5 9.3q1.3 0 2.2-.9t.9-2.2-.9-2.2-2.2-.9-2.2.9-.9 2.2.9 2.2 2.2.9z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCab.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
