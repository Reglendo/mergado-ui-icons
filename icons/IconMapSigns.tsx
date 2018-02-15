
import * as React from "react"

export const IconMapSigns: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--map-signs ${props.addClass} ${props.className}`
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
                    <g><path d="M39 6.6q.2.3.2.5t-.2.6l-3.2 3.1q-.6.6-1.5.6h-30q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4h12.8V1.4q0-.6.5-1t1-.4h2.8q.6 0 1 .4t.5 1v1.5h11.4q.9 0 1.5.6zM17.1 27.1h5.8v11.5q0 .6-.5 1t-1 .4h-2.8q-.6 0-1-.4t-.5-1V27.1zm18.6-10q.6 0 1 .5t.4 1v5.7q0 .6-.4 1t-1 .4h-30q-.9 0-1.5-.6l-3.1-3.2q-.3-.2-.3-.5t.2-.5l3.2-3.1q.6-.7 1.5-.7h11.4v-4.2h5.8v4.2h12.8z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMapSigns.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
