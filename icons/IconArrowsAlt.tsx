
import * as React from "react"

export const IconArrowsAlt: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--arrows-alt ${props.addClass} ${props.className}`
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
                    <g><path d="M31.6 12.1L23.7 20l7.9 7.9 3.3-3.2q.6-.7 1.5-.3.9.4.9 1.3v10q0 .6-.4 1t-1 .4h-10q-1 0-1.4-.9-.3-.8.4-1.5l3.2-3.2-8-7.9-7.9 7.9 3.2 3.2q.7.7.3 1.5-.3.9-1.3.9h-10q-.5 0-1-.4t-.4-1v-10q0-.9.9-1.3t1.5.3l3.2 3.2 8-7.9-7.9-7.9-3.3 3.2q-.4.4-1 .4-.2 0-.5-.1-.9-.4-.9-1.3v-10q0-.6.4-1t1-.4h10q1 0 1.3.9.4.8-.3 1.5l-3.2 3.2 7.9 7.9 8-7.9-3.2-3.2q-.7-.7-.4-1.5.4-.9 1.4-.9h10q.5 0 1 .4t.4 1v10q0 .9-.9 1.3-.3.1-.5.1-.6 0-1-.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconArrowsAlt.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
