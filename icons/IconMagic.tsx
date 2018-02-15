
import * as React from "react"

export const IconMagic: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--magic ${props.addClass} ${props.className}`
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
                    <g><path d="M27.6 13l6.5-6.6L31.7 4l-6.5 6.6zm9.9-6.6q0 .6-.4 1L8.4 36.1q-.4.4-1 .4t-1-.4L2 31.7q-.4-.4-.4-1t.4-1L30.7 1q.4-.4 1-.4t1 .4l4.4 4.4q.4.4.4 1zM7.4 2.2l2.2.7-2.2.6-.7 2.2L6 3.5l-2.1-.6L6 2.2 6.7 0zm7.8 3.6l4.4 1.3-4.4 1.4-1.3 4.4-1.4-4.4-4.4-1.4 4.4-1.3 1.4-4.4zM36 16.5l2.1.6-2.1.7-.7 2.2-.7-2.2-2.2-.7 2.2-.6.7-2.2zM21.7 2.2l2.2.7-2.2.6-.7 2.2-.7-2.2-2.2-.6 2.2-.7L21 0z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMagic.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
