
import * as React from "react"

export const IconArrowCircleOLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--arrow-circle-o-left ${props.addClass} ${props.className}`
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
                    <g><path d="M28.7 17.9v4.2q0 .3-.2.5t-.5.3h-7.9v4.2q0 .4-.2.6t-.5.2q-.2 0-.5-.3l-7.1-7.1q-.2-.2-.2-.5t.2-.5l7.1-7.2q.2-.2.5-.2t.5.3.2.5v4.2H28q.3 0 .5.3t.2.5zm3.6 2.1q0-3.3-1.6-6.1t-4.5-4.4-6.1-1.6T14 9.5t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6 6.1-1.6 4.5-4.4 1.6-6.1zm5 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconArrowCircleOLeft.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconArrowCircleOLeft;
