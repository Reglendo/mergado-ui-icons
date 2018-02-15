
import * as React from "react"

export const IconParagraph: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--paragraph ${props.addClass} ${props.className}`
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
                    <g><path d="M34 4.2v1.6q0 .7-.4 1.4t-.9.7h-1.2q-.6.2-.8.7v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V8.6h-3.1v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V24.7q-3.3-.3-5.5-1.3-2.8-1.3-4.2-4Q6 16.8 6 13.6q0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-.8 9.3-.8h10.7q.5 0 .9.4t.4.9z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconParagraph.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
