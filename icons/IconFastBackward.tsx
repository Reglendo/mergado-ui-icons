
import * as React from "react"

export const IconFastBackward: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--fast-backward ${props.addClass} ${props.className}`
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
                    <g><path d="M39 3.1q.4-.4.7-.2t.3.7v32.8q0 .6-.3.7t-.7-.2L23.1 21q-.2-.2-.2-.4v15.8q0 .6-.3.7t-.7-.2L6 21q-.2-.2-.3-.4v15.1q0 .6-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h2.9q.6 0 1 .4t.4 1v15.1q.1-.2.3-.4L21.9 3.1q.4-.4.7-.2t.3.7v15.8q0-.2.2-.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFastBackward.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
