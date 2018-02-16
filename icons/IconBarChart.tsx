
import * as React from "react"

export const IconBarChart: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--bar-chart ${props.addClass} ${props.className}`
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
                    <g><path d="M12.4 20v9.9H7.5V20h4.9zm7.5-9.9v19.8h-5V10.1h5zm19.9 22.3v2.5H0V5.1h2.5v27.3h37.3zM27.3 15v14.9h-4.9V15h4.9zm7.5-7.4v22.3h-5V7.6h5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconBarChart.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconBarChart;
