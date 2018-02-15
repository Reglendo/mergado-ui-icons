
import * as React from "react"

export const IconMousePointer: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--mouse-pointer ${props.addClass} ${props.className}`
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
                    <g><path d="M32.3 23.3q.7.7.3 1.5-.4.9-1.3.9h-8.5l4.4 10.6q.3.6 0 1.1t-.7.8l-4 1.7q-.5.2-1.1 0t-.7-.8L16.4 29l-7 7q-.4.4-1 .4-.2 0-.5-.1Q7 35.9 7 35V1.4q0-.9.9-1.3.3-.1.5-.1.6 0 1 .4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMousePointer.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
