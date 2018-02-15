
import * as React from "react"

export const IconPaperPlane: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--paper-plane ${props.addClass} ${props.className}`
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
                    <g><path d="M39.4.2q.7.6.6 1.5L34.3 36q-.1.6-.7 1-.4.1-.7.1-.3 0-.6-.1l-10.1-4.1-5.4 6.6q-.4.5-1.1.5-.3 0-.5-.1-.4-.1-.7-.5t-.2-.8v-7.8L33.6 7.1 9.7 27.8.9 24.2q-.8-.3-.9-1.3 0-.8.7-1.3L37.9.2q.3-.2.7-.2.4 0 .8.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPaperPlane.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
