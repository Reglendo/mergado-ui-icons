
import * as React from "react"

export const IconInfo: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--info ${props.addClass} ${props.className}`
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
                    <g><path d="M27.3 30v2.9q0 .5-.4 1t-1 .4H14.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.5V20h-1.5q-.6 0-1-.4t-.4-1v-2.9q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1v12.9h1.5q.5 0 1 .4t.4 1zM24.4 4.3v4.3q0 .6-.4 1t-1 .4h-5.7q-.6 0-1-.4t-.4-1V4.3q0-.6.4-1t1-.4H23q.6 0 1 .4t.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconInfo.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
