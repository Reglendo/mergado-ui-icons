
import * as React from "react"

export const IconFastForward: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--fast-forward ${props.addClass} ${props.className}`
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
                    <g><path d="M1 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L16.9 19l.2.4V3.6q0-.6.3-.7t.7.2L34 19q.2.2.3.4V4.3q0-.6.4-1t1-.4h2.9q.5 0 1 .4t.4 1v31.4q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1V20.6q-.1.2-.3.4L18.1 36.9q-.4.4-.7.2t-.3-.7V20.6l-.2.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFastForward.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
