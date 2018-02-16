
import * as React from "react"

export const IconObjectGroup: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--object-group ${props.addClass} ${props.className}`
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
                    <g><path d="M39.8 10.1h-2.5v19.8h2.5v7.5h-7.5v-2.5H7.5v2.5H0v-7.5h2.5V10.1H0V2.6h7.5v2.5h24.8V2.6h7.5v7.5zm-5-5v2.5h2.5V5.1h-2.5zm-32.3 0v2.5H5V5.1H2.5zM5 34.9v-2.5H2.5v2.5H5zm27.3-2.5v-2.5h2.5V10.1h-2.5V7.6H7.5v2.5H5v19.8h2.5v2.5h24.8zm5 2.5v-2.5h-2.5v2.5h2.5zM24.8 15h7.5v14.9H14.9V25H7.5V10.1h17.3V15zM9.9 22.5h12.5v-10H9.9v10zm19.9 5v-10h-5V25h-7.4v2.5h12.4z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconObjectGroup.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconObjectGroup;
