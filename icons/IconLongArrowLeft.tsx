
import * as React from "react"

export const IconLongArrowLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--long-arrow-left ${props.addClass} ${props.className}`
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
                    <g><path d="M39 17.9v4.2q0 .3-.2.5t-.5.2H11.2v4.9q0 .4-.5.6t-.7-.1l-8.4-7.6q-.2-.3-.2-.5 0-.3.2-.6l8.4-7.7q.3-.3.7-.1.4.2.4.6v4.9h27.2q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconLongArrowLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
