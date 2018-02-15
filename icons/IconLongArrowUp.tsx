
import * as React from "react"

export const IconLongArrowUp: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--long-arrow-up ${props.addClass} ${props.className}`
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
                    <g><path d="M28.6 11q-.2.4-.7.4h-5v27.9q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5V11.4h-5q-.5 0-.6-.4t.1-.8l7.8-8.6q.2-.2.5-.2t.5.2l8 8.6q.3.4.1.8z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconLongArrowUp.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
