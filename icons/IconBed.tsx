
import * as React from "react"

export const IconBed: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--bed ${props.addClass} ${props.className}`
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
                    <g><path d="M5 22.5h33.5q.5 0 .9.4t.3.8v8.7h-4.9v-4.9H5v4.9H0V8.8q0-.5.4-.9t.8-.3h2.5q.5 0 .9.3t.4.9v13.7zm11.1-6.2q0-2.1-1.4-3.5t-3.5-1.5-3.5 1.5-1.5 3.5 1.5 3.5 3.5 1.4 3.5-1.4 1.4-3.5zm23.7 4.9V20q0-3.1-2.2-5.3t-5.3-2.2H18.6q-.5 0-.8.4t-.4.9v7.4h22.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBed.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
