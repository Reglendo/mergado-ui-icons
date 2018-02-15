
import * as React from "react"

export const IconArrowLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrow-left ${props.addClass} ${props.className}`
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
                    <g><path d="M36.3 20v2.9q0 1.1-.7 2t-1.9.8H18l6.5 6.6q.9.8.9 2t-.9 2L22.8 38q-.8.8-2 .8-1.1 0-2-.8L4.3 23.4q-.9-.8-.9-2 0-1.1.9-2L18.8 4.9q.8-.9 2-.9t2 .9l1.7 1.6q.9.9.9 2.1t-.9 2L18 17.1h15.7q1.1 0 1.9.9t.7 2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconArrowLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
