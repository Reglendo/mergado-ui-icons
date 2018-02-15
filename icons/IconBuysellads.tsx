
import * as React from "react"

export const IconBuysellads: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--buysellads ${props.addClass} ${props.className}`
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
                    <g><path d="M23.4 24.2h-6.5l3.2-12.3zm1.9 7.2h7L25.1 8.6h-9.9L8 31.4h6.9l8.6-7zm12-22.1v21.4q0 2.6-1.9 4.5t-4.5 1.9H9.4q-2.6 0-4.5-1.9T3 30.7V9.3q0-2.6 1.9-4.5t4.5-1.9h21.5q2.6 0 4.5 1.9t1.9 4.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBuysellads.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
