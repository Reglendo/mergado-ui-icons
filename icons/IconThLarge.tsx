
import * as React from "react"

export const IconThLarge: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--th-large ${props.addClass} ${props.className}`
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
                    <g><path d="M18.6 22.9v8.5q0 1.2-.8 2t-2 .9H4.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2zm20 17.2v8.5q0 1.2-.8 2t-2 .9H24.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H24.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconThLarge.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
