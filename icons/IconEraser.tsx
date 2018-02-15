
import * as React from "react"

export const IconEraser: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--eraser ${props.addClass} ${props.className}`
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
                    <g><path d="M18.6 30.6l7-7.9h-16l-6.9 7.9h15.9zm21-22.3q.4.7.2 1.5t-.6 1.3L20.6 32.4q-.8.9-2 .9H2.7q-.8 0-1.5-.4t-1-1.2q-.3-.7-.2-1.5t.7-1.3L19.3 7.6q.8-.9 2-.9h15.9q.8 0 1.5.4t.9 1.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconEraser.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
