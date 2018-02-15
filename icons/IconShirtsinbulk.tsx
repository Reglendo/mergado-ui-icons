
import * as React from "react"

export const IconShirtsinbulk: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--shirtsinbulk ${props.addClass} ${props.className}`
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
                    <g><path d="M3 0h34.3v31.1L20 38.6 3 31.1V0zm32.1 29.6V8.9H5.2v20.7L20 36.2zm0-22.9V2.2H5.2v4.5h29.9zM7 13.4v2.5h-.8v-2.5H7zm0 3.3v2.5h-.8v-2.5H7zM7 20v2.5h-.8V20H7zm0 3.3v2.5h-.8v-2.5H7zm0 3.3v2.6h-.8v-2.6H7zm.6 3.2L8 29l2.3 1.1-.3.7zm3.1 1.3l.3-.7 2.3 1-.3.7zm3 1.4l.3-.8 2.3 1-.3.8zm3 1.3l.3-.8 2.4 1.1-.4.7zm4.1.3l2.3-1.1.4.8-2.4 1zm3-1.4l2.3-1 .4.8-2.4 1zm3-1.3l2.4-1 .3.7-2.3 1zm3.1-1.3l2.3-1.1.3.8-2.3 1zM8.8 3.3v.8H6.2v-.8h2.6zm3.6 0v.8H9.8v-.8h2.6zm3.6 0v.8h-2.6v-.8H16zm3.6 0v.8h-2.5v-.8h2.5zm3.6 0v.8h-2.5v-.8h2.5zm3.6 0v.8h-2.5v-.8h2.5zm3.7 0v.8h-2.6v-.8h2.6zm3.5 0v.8h-2.5v-.8H34zM7 10.9v1.7h-.8v-2.5h2.6v.8H7zm5.4-.8v.8H9.8v-.8h2.6zm3.6 0v.8h-2.6v-.8H16zm3.6 0v.8h-2.5v-.8h2.5zm3.6 0v.8h-2.5v-.8h2.5zm3.6 0v.8h-2.5v-.8h2.5zm3.7 0v.8h-2.6v-.8h2.6zm2.7 2.5v-1.7h-1.7v-.8h2.6v2.5h-.9zm0 3.3v-2.5h.9v2.5h-.9zm0 3.3v-2.5h.9v2.5h-.9zm0 3.3V20h.9v2.5h-.9zm0 3.3v-2.5h.9v2.5h-.9zm0 3.4v-2.6h.9v2.6h-.9zM20 28.4q-2.9 0-5-2.1t-2-4.9q0-2.9 2-4.9t5-2.1q2.9 0 4.9 2.1t2.1 4.9q0 2.9-2.1 4.9T20 28.4zm-3.7-8.5q0 .8.4 1.2t1.1.6 1.5.1 1.4.1 1.1.2.4.7q0 1.1-2.5 1.1-2.1 0-2.7-1.2h-.1l-.7 1.4q1.5 1 3.6 1 .7 0 1.3-.1t1.2-.4 1-.7.4-1.2q0-1-.6-1.6t-1.5-.6-1.8 0-1.5-.2-.6-.5q0-.5.5-.8t.9-.3.9-.1q.8 0 1.6.3t1.1.7h.1l.7-1.3q-.1 0-.5-.1t-.5-.2-.4-.2-.5-.2-.5-.1-.5 0-.5-.1q-.7 0-1.3.1t-1.2.4-.9.8-.4 1.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconShirtsinbulk.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
