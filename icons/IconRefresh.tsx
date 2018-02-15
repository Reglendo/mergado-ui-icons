
import * as React from "react"

export const IconRefresh: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--refresh ${props.addClass} ${props.className}`
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
                    <g><path d="M36.7 23.6v.1q-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-.4.4-1 .4t-1-.4-.4-1v-10q0-.6.4-1t1-.4h10q.6 0 1 .4t.5 1-.5 1l-3 3q1.6 1.5 3.6 2.3t4.1.8q3 0 5.6-1.4t4.2-4q.2-.4 1.2-2.6.1-.5.6-.5H36q.3 0 .5.2t.2.5zm.6-17.9v10q0 .6-.4 1t-1 .4h-10q-.6 0-1-.4t-.5-1 .5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-.2.4-1.2 2.6-.2.5-.6.5H4.1q-.3 0-.5-.2t-.2-.5v-.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q.4-.4 1-.4t1 .4.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconRefresh.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
