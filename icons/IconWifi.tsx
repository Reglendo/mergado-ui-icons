
import * as React from "react"

export const IconWifi: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--wifi ${props.addClass} ${props.className}`
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
                    <g><path d="M19.9 32.2q-.4 0-1.8-1.5t-1.4-1.8q0-.6 1.2-1t2-.4 2 .4 1.2 1q0 .4-1.4 1.8t-1.8 1.5zm5.2-5.3l-.8-.5q-.8-.5-1.9-.9t-2.5-.5-2.5.5-2 .9-.8.5q-.3 0-1.8-1.4t-1.4-1.9q0-.2.1-.4 1.6-1.5 3.9-2.3t4.5-.9 4.5.9 3.8 2.3q.2.2.2.4 0 .4-1.5 1.9t-1.8 1.4zm5.3-5.3q-.2 0-.4-.1-2.7-2.1-4.9-3t-5.2-1q-1.7 0-3.3.4T13.7 19t-2.2 1.2-1.6 1-.6.4q-.3 0-1.7-1.4t-1.5-1.8q0-.3.2-.5 2.6-2.5 6.2-3.9t7.4-1.5 7.4 1.5 6.2 3.9q.2.2.2.5t-1.5 1.8-1.8 1.4zm5.3-5.2q-.2 0-.5-.2-3.4-3.1-7.2-4.6t-8.1-1.5-8.2 1.5-7.2 4.6q-.2.2-.4.2-.4 0-1.8-1.5T.8 13.1q0-.2.2-.4 3.6-3.6 8.6-5.6t10.3-2 10.2 2 8.6 5.6q.2.2.2.4 0 .4-1.4 1.8t-1.8 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconWifi.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
