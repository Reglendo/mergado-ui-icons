
import * as React from "react"

export const IconPauseCircleO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--pause-circle-o ${props.addClass} ${props.className}`
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
                    <g><path d="M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zm0 29.2q3.3 0 6.1-1.6t4.5-4.4 1.6-6.1-1.6-6.1-4.5-4.4-6.1-1.6T14 9.5t-4.4 4.4T8 20t1.6 6.1 4.4 4.4 6.1 1.6zm2.2-5q-.3 0-.5-.2t-.2-.5V13.6q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v12.8q0 .3-.2.5t-.5.2h-4.3zm-8.6 0q-.3 0-.5-.2t-.2-.5V13.6q0-.3.2-.5t.5-.2H18q.3 0 .5.2t.2.5v12.8q0 .3-.2.5t-.5.2h-4.3z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconPauseCircleO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconPauseCircleO;
