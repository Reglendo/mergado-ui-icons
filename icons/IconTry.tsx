
import * as React from "react"

export const IconTry: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--try ${props.addClass} ${props.className}`
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
                    <g><path d="M32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-.3 0-.5-.2t-.2-.5V19.9l-4.8 1.5h-.2q-.2 0-.4-.1-.3-.2-.3-.6v-2.8q0-.6.5-.7l5.2-1.6v-2.1L7.9 15h-.2q-.2 0-.4-.1-.3-.3-.3-.6v-2.9q0-.5.5-.7l5.2-1.6V3.6q0-.3.2-.5t.5-.2H17q.3 0 .5.2t.2.5v4L26.1 5q.3-.1.6.1t.3.6v2.9q0 .5-.5.7L17.7 12v2l8.4-2.6q.3-.1.6.2t.3.5V15q0 .5-.5.7l-8.8 2.7v10.9q4.2-.3 7.1-3.4t2.9-7.3q0-.3.2-.5t.5-.2H32q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconTry.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
