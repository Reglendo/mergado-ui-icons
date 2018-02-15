
import * as React from "react"

export const IconExclamation: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--exclamation ${props.addClass} ${props.className}`
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
                    <g><path d="M24.4 27.9v5q0 .5-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1v-5q0-.6.4-1t1-.5H23q.6 0 1 .5t.4 1zm.7-23.6l-.6 17.1q0 .6-.5 1t-1 .5h-5.7q-.6 0-1-.5t-.5-1l-.6-17.1q0-.6.4-1t1-.4h7.1q.6 0 1 .4t.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconExclamation.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
