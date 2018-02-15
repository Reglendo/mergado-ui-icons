
import * as React from "react"

export const IconMinus: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--minus ${props.addClass} ${props.className}`
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
                    <g><path d="M35.9 16.4v4.3q0 .9-.6 1.5t-1.5.7H6.6q-.8 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h27.2q.9 0 1.5.6t.6 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMinus.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
