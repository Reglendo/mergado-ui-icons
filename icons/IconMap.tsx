
import * as React from "react"

export const IconMap: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--map ${props.addClass} ${props.className}`
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
                    <g><path d="M11.4 0q.3 0 .5.2t.2.5v32.9q0 .4-.3.6L1.1 39.9q-.2.1-.4.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.4-.6L11.1.1q.2-.1.3-.1zm27.9 0q.3 0 .5.2t.2.5v32.9q0 .4-.4.6l-10.7 5.7q-.1.1-.3.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.3-.6L39 .1q.1-.1.3-.1zm-25 0q.2 0 .3.1L26 5.8q.4.2.4.6v32.9q0 .3-.2.5t-.5.2q-.2 0-.3-.1L14 34.2q-.4-.2-.4-.6V.7q0-.3.2-.5t.5-.2z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMap.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
