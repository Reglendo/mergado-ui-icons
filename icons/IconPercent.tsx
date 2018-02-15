
import * as React from "react"

export const IconPercent: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--percent ${props.addClass} ${props.className}`
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
                    <g><path d="M31.6 28.6q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .8 2-.8.9-2zM14.4 11.4q0-1.1-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zm22.9 17.2q0 3.5-2.5 6t-6.1 2.5-6-2.5-2.6-6 2.6-6.1 6-2.5 6.1 2.5 2.5 6.1zM35.1 4.3q0 .4-.2.8L11.3 36.6q-.4.5-1.2.5H6.6q-.6 0-1-.4t-.5-1q0-.4.3-.8L29 3.4q.4-.5 1.1-.5h3.6q.6 0 1 .4t.4 1zm-15 7.1q0 3.6-2.5 6.1t-6 2.5-6.1-2.5T3 11.4t2.5-6 6.1-2.5 6 2.5 2.5 6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPercent.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
