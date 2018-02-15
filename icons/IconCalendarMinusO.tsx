
import * as React from "react"

export const IconCalendarMinusO: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--calendar-minus-o ${props.addClass} ${props.className}`
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
                    <g><path d="M27.2 25v1.4q0 .3-.2.5t-.5.2H13.6q-.3 0-.5-.2t-.2-.5V25q0-.3.2-.5t.5-.2h12.9q.3 0 .5.2t.2.5zM4.4 37.1h31.4V14.3H4.4v22.8zM12.9 10V3.6q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm17.2 0V3.6q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5V10q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5zm8.5-1.4v28.5q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.9t-.8-2V8.6q0-1.2.8-2t2.1-.9h2.8V3.6q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6V3.6q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 .9t.8 2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCalendarMinusO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
