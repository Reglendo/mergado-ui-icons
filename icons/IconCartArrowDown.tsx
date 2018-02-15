
import * as React from "react"

export const IconCartArrowDown: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--cart-arrow-down ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.text && props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M30.1 15.7q0-.6-.5-1t-1-.4-1 .4L24.4 18v-6.6q0-.6-.5-1t-1-.4-1 .4-.4 1V18l-3.3-3.3q-.4-.4-1-.4t-1 .4-.4 1 .4 1l5.7 5.7q.4.5 1 .5t1-.5l5.7-5.7q.5-.4.5-1zM15.8 34.3q0 1.2-.8 2t-2.1.8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zm20 0q0 1.2-.9 2t-2 .8-2-.8-.8-2 .8-2 2-.9 2 .9.9 2zM38.6 10v11.4q0 .6-.3 1t-.9.5l-23.3 2.7q0 .1.1.5t.1.6.1.4q0 .4-.6 1.5h20.6q.5 0 1 .4t.4 1-.4 1-1 .4H11.5q-.6 0-1-.4t-.4-1q0-.3.2-.9t.7-1.3.4-.9L7.5 8.6H2.9q-.6 0-1-.5t-.4-1 .4-1 1-.4h5.7q.4 0 .7.2t.4.3.3.6.2.5.1.7.1.6h26.8q.6 0 1 .4t.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCartArrowDown.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
