
import * as React from "react"

export const IconChevronCircleLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--chevron-circle-left ${props.addClass} ${props.className}`
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
                    <g><path d="M23.3 31.1l2.3-2.2q.4-.5.4-1t-.4-1L18.7 20l6.9-6.9q.4-.4.4-1t-.4-1l-2.3-2.2q-.4-.5-1-.5t-1 .5L11.1 19q-.4.4-.4 1t.4 1l10.2 10.1q.4.5 1 .5t1-.5zm14-11.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconChevronCircleLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
