
import * as React from "react"

export const IconLightbulbO: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--lightbulb-o ${props.addClass} ${props.className}`
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
                    <g><path d="M24.9 12.9q0 .2-.2.5t-.5.2-.5-.2-.2-.5q0-1.1-1.2-1.6t-2.4-.6q-.3 0-.5-.2t-.2-.5.2-.5.5-.2q1.1 0 2.2.3t2 1.2.8 2.1zm3.6 0q0-1.6-.8-3t-2-2.3T23 6.2t-3.1-.5-3 .5-2.8 1.4-2 2.3-.7 3q0 2.2 1.5 4l.7.7q.5.5.6.7 2.9 3.5 3.2 6.7h5.1q.3-3.2 3.1-6.6.2-.3.7-.8t.7-.7q1.5-1.8 1.5-4zm2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-.8 2.4q1.1.6 1.1 1.8 0 .9-.6 1.5.6.6.6 1.4 0 1.2-1 1.8.2.5.2 1.1 0 1-.7 1.5t-1.7.6q-.4 1-1.3 1.6t-2 .5-1.9-.5-1.4-1.6q-1 0-1.7-.6t-.7-1.5q0-.6.3-1.1-1-.6-1-1.8 0-.8.6-1.4-.6-.6-.6-1.5 0-1.2 1.1-1.8-.1-1.1-.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-.7 4.2.7 3.7 2 2.6 3.1 1 4.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconLightbulbO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
