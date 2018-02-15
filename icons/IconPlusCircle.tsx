
import * as React from "react"

export const IconPlusCircle: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--plus-circle ${props.addClass} ${props.className}`
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
                    <g><path d="M30.1 21.4v-2.8q0-.6-.4-1t-1-.5H23v-5.7q0-.6-.4-1t-1-.4h-2.9q-.6 0-1 .4t-.4 1v5.7h-5.7q-.6 0-1 .5t-.5 1v2.8q0 .6.5 1t1 .5h5.7v5.7q0 .5.4 1t1 .4h2.9q.6 0 1-.4t.4-1v-5.7h5.7q.6 0 1-.5t.4-1zm7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPlusCircle.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
