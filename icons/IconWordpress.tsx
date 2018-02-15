
import * as React from "react"

export const IconWordpress: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--wordpress ${props.addClass} ${props.className}`
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
                    <g><path d="M2.8 20q0-3.6 1.5-7l8.2 22.4q-4.4-2.1-7-6.2T2.8 20zm28.8-.9q0 .5-.1.9t-.2 1.1-.3 1-.3 1.3-.4 1.3l-1.7 5.7L22.4 12q1-.1 1.9-.2.5-.1.6-.4t0-.7-.7-.3l-4.6.2q-1.6 0-4.5-.2-.2 0-.4.1t-.3.3 0 .4.2.4.4.2l1.8.2 2.7 7.3-3.8 11.2L9.5 12l2-.2q.4-.1.5-.4t0-.7-.7-.3l-4.5.2H5.7Q8 7 11.8 4.9T20 2.8q3.3 0 6.3 1.2t5.3 3.3h-.2q-1.3 0-2.1.9t-.8 2.2v.5q0 .3.1.5t.2.5.2.5.3.5.2.4.4.6.3.5q1.4 2.4 1.4 4.7zm-11.3 2.4l5.3 14.4q0 .2.1.3-2.8 1-5.7 1-2.5 0-4.8-.7zM35 11.8q2.2 3.8 2.2 8.2 0 4.7-2.4 8.6t-6.2 6.2l5.3-15.1q1.3-3.8 1.3-6.2 0-.9-.2-1.7zM20 0q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4T40 20t-1.6 7.8-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0zm0 39.1q3.9 0 7.4-1.5t6.1-4.1 4.1-6.1 1.5-7.4-1.5-7.4-4.1-6.1-6.1-4.1T20 .9t-7.4 1.5-6.1 4.1-4.1 6.1T.9 20t1.5 7.4 4.1 6.1 6.1 4.1 7.4 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconWordpress.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
