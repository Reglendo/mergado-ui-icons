
import * as React from "react"

export const IconMehO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--meh-o ${props.addClass} ${props.className}`
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
                    <g><path d="M28.7 24.3q0 .6-.4 1t-1 .4H13q-.6 0-1-.4t-.4-1 .4-1 1-.4h14.3q.6 0 1 .4t.4 1zm-11.4-10q0 1.2-.9 2t-2 .8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zm11.4 0q0 1.2-.8 2t-2 .8-2.1-.8-.8-2 .8-2 2.1-.9 2 .9.8 2zm5.7 5.7q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1T10 9.9t-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5zm2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconMehO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconMehO;
