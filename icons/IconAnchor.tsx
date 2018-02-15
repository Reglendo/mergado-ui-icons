
import * as React from "react"

export const IconAnchor: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--anchor ${props.addClass} ${props.className}`
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
                    <g><path d="M21.4 5.7q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zM40 26.4v7.9q0 .5-.4.7h-.3q-.3 0-.5-.2l-2.1-2.1q-2.7 3.2-7.1 5.1T20 39.6t-9.6-1.8-7.1-5.1l-2.1 2.1q-.2.2-.5.2H.4q-.4-.2-.4-.7v-7.9q0-.3.2-.5t.5-.2h7.9q.5 0 .6.5.2.4-.1.7l-2.2 2.3q1.5 2 4.2 3.4t6 1.8V20h-4.2q-.6 0-1-.4t-.5-1v-2.9q0-.6.5-1t1-.4h4.2v-3.6q-1.2-.8-2-2.1t-.8-2.9q0-2.4 1.7-4T20 0t4 1.7 1.7 4q0 1.6-.8 2.9t-2 2v3.7h4.2q.6 0 1 .4t.5 1v2.9q0 .6-.5 1t-1 .4h-4.2v14.4q3.3-.4 6-1.8t4.2-3.4l-2.2-2.3q-.3-.3-.1-.7.1-.5.6-.5h7.9q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconAnchor.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
