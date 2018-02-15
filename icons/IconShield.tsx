
import * as React from "react"

export const IconShield: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--shield ${props.addClass} ${props.className}`
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
                    <g><path d="M29.8 21.4V7.1h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1zm4.3-17.1v17.1q0 2-.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-.9.4q-.3.1-.6.1t-.6-.1q-.4-.2-.9-.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-.7-3.8V4.3q0-.6.4-1t1-.4h25.7q.6 0 1 .4t.5 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconShield.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
