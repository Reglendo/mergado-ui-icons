
import * as React from "react"

export const IconSortDesc: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--sort-desc ${props.addClass} ${props.className}`
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
                    <g><path d="M31.4 24.3q0 .6-.5 1l-10 10q-.4.4-1 .4t-1-.4l-10-10q-.4-.4-.4-1t.4-1 1-.4h20q.6 0 1 .4t.5 1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconSortDesc.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconSortDesc;
