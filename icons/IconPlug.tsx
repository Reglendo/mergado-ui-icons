
import * as React from "react"

export const IconPlug: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--plug ${props.addClass} ${props.className}`
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
                    <g><path d="M39.2 10.1q.8.8.8 2t-.8 2.1l-9 8.9 3.4 3.3L30 30q-3.6 3.6-8.7 4.2t-9.2-2.3L4 40H0v-4l8.1-8.1q-2.8-4.1-2.3-9.2T10 10l3.6-3.6 3.3 3.4 8.9-9q.9-.8 2.1-.8t2 .8.8 2-.8 2.1L21 13.8l5.2 5.2 8.9-8.9q.9-.8 2.1-.8t2 .8z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPlug.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
