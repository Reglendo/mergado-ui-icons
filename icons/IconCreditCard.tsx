
import * as React from "react"

export const IconCreditCard: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--credit-card ${props.addClass} ${props.className}`
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
                    <g><path d="M36.5 4.1q1.4 0 2.4.9t1 2.4v25.2q0 1.4-1 2.4t-2.4.9H3.3Q2 35.9 1 35t-1-2.4V7.4Q0 6 1 5t2.3-.9h33.2zM3.3 6.7q-.2 0-.4.2t-.2.5V12h34.5V7.4q0-.3-.2-.5t-.5-.2H3.3zm33.2 26.6q.3 0 .5-.2t.2-.5V20H2.7v12.6q0 .3.2.5t.4.2h33.2zM5.3 30.6V28h5.3v2.6H5.3zm8 0V28h8v2.6h-8z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconCreditCard.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconCreditCard;
