
import * as React from "react"

export const IconFlickr: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--flickr ${props.addClass} ${props.className}`
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
                    <g><path d="M30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5zM18.6 20q0-2-1.4-3.3t-3.4-1.4-3.3 1.4T9.1 20t1.4 3.3 3.3 1.4 3.4-1.4 1.4-3.3zm12.6 0q0-2-1.4-3.3t-3.4-1.4-3.3 1.4-1.4 3.3 1.4 3.3 3.3 1.4 3.4-1.4 1.4-3.3z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFlickr.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
