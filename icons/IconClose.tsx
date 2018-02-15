
import * as React from "react"

export const IconClose: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--close ${props.addClass} ${props.className}`
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
                    <g><path d="M33.5 29.5q0 .9-.7 1.5l-3 3.1q-.6.6-1.5.6t-1.5-.6l-6.6-6.6-6.5 6.6q-.7.6-1.6.6t-1.5-.6l-3-3.1q-.6-.6-.6-1.5t.6-1.5l6.5-6.6-6.5-6.5q-.6-.7-.6-1.6t.6-1.5l3-3q.6-.6 1.5-.6t1.6.6l6.5 6.6 6.6-6.6q.6-.6 1.5-.6t1.5.6l3.1 3q.6.7.6 1.5t-.6 1.6l-6.6 6.5 6.6 6.6q.6.6.6 1.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconClose.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
