
import * as React from "react"

export const IconFilter: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--filter ${props.addClass} ${props.className}`
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
                    <g><path d="M35.8 6.6q.4.9-.3 1.5l-11 11.1v16.5q0 1-.9 1.3-.3.1-.5.1-.6 0-1-.4L16.4 31q-.5-.4-.5-1V19.2l-11-11q-.7-.7-.3-1.6.4-.9 1.3-.9h28.6q.9 0 1.3.9z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFilter.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
