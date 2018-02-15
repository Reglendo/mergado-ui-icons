
import * as React from "react"

export const IconArrowRight: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrow-right ${props.addClass} ${props.className}`
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
                    <g><path d="M36.4 21.4q0 1.2-.9 2.1L21 38q-.9.8-2 .8-1.2 0-2-.8l-1.7-1.7q-.9-.8-.9-2t.9-2l6.5-6.6H6.1q-1.1 0-1.9-.8t-.7-2V20q0-1.2.7-2t1.9-.9h15.7l-6.5-6.5q-.9-.8-.9-2t.9-2L17 4.9q.8-.9 2-.9t2 .9l14.5 14.5q.9.8.9 2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconArrowRight.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
