
import * as React from "react"

export const IconDeviantart: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--deviantart ${props.addClass} ${props.className}`
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
                    <g><path d="M31.4 6.8l-6.8 13 .5.6h6.3v9.3H20l-.9.7-3.2 6.1-.7.6H8.5v-6.7l6.8-13-.6-.7H8.5V7.4h11.3l1-.6L24 .7l.6-.7h6.8v6.8z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconDeviantart.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
