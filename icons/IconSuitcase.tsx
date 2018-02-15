
import * as React from "react"

export const IconSuitcase: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--suitcase ${props.addClass} ${props.className}`
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
                    <g><path d="M14.3 8.6h11.4V5.7H14.3v2.9zm-7.9 0v28.5H5q-2.1 0-3.5-1.4T0 32.1V13.6q0-2.1 1.5-3.6T5 8.6h1.4zm25 0v28.5H8.6V8.6h2.8V5q0-.9.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h2.8zm8.6 5v18.5q0 2.1-1.5 3.6T35 37.1h-1.4V8.6H35q2.1 0 3.5 1.4t1.5 3.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconSuitcase.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
