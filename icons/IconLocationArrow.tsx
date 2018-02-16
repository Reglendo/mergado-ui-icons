
import * as React from "react"

export const IconLocationArrow: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--location-arrow ${props.addClass} ${props.className}`
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
                    <g><path d="M35.8 7.8L21.5 36.4q-.4.7-1.3.7h-.3q-.5-.1-.8-.5t-.3-.9V22.9H5.9q-.5 0-.9-.3t-.5-.8.1-1 .7-.6L33.9 5.9q.2-.2.6-.2.6 0 1 .4.3.4.4.8t-.1.9z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconLocationArrow.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconLocationArrow;
