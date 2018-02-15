
import * as React from "react"

export const IconLevelDown: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--level-down ${props.addClass} ${props.className}`
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
                    <g><path d="M9.2 5.7h15.7q.3 0 .5.2t.2.6v19.2h4.3q.9 0 1.3.8t-.2 1.6l-7.1 8.6q-.4.4-1.1.4t-1.1-.4l-7.1-8.6q-.6-.7-.2-1.6.4-.8 1.2-.8h4.3V11.4h-7.1q-.3 0-.6-.2L8.7 6.9q-.3-.3-.1-.8.2-.4.6-.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconLevelDown.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
