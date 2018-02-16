
import * as React from "react"

export const IconYCombinator: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--y-combinator ${props.addClass} ${props.className}`
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
                    <g><path d="M21.1 22.4L27 11.3h-2.5L21 18.2q-.5 1.1-1 2.1l-.9-2.1-3.5-6.9h-2.7l5.9 11v7.2h2.3v-7.1zM37.3 2.9v34.2H3V2.9h34.3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconYCombinator.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconYCombinator;
