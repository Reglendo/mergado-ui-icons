
import * as React from "react"

export const IconCalendarPlusO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--calendar-plus-o ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.textFirst && textEl }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M35.8 5.7q1.1 0 2 .9t.8 2v28.5q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.9t-.8-2V8.6q0-1.2.8-2t2.1-.9h2.8V3.6q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6V3.6q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9zm-8.6-2.1V10q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5V3.6q0-.3-.2-.5t-.5-.2h-1.5q-.3 0-.5.2t-.2.5zm-17.1 0V10q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5V3.6q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5zm25.7 33.5V14.3H4.4v22.8h31.4zM21.5 24.3h5q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2h-5v5q0 .4-.2.6t-.5.2h-1.4q-.4 0-.6-.2t-.2-.6v-5h-5q-.3 0-.5-.2t-.2-.5V25q0-.3.2-.5t.5-.2h5v-5q0-.3.2-.5t.6-.2h1.4q.3 0 .5.2t.2.5v5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCalendarPlusO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCalendarPlusO;
