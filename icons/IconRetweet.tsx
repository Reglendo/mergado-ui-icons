
import * as React from "react"

export const IconRetweet: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--retweet ${props.addClass} ${props.className}`
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
                    <g><path d="M26.6 32.6q0 .3-.2.5t-.5.2H6q-.2 0-.3-.1t-.2-.1-.1-.2-.1-.2 0-.2V20h-4q-.5 0-.9-.4t-.4-.9q0-.5.3-.9l6.7-8q.4-.4 1-.4t1 .4l6.6 8q.3.4.3.9t-.3.9-1 .4h-4v8h12q.3 0 .5.2l3.3 4q.2.2.2.4zM39.9 24q0 .5-.3.8l-6.7 8q-.4.5-1 .5t-1-.5l-6.7-8q-.3-.3-.3-.8 0-.6.4-.9t.9-.4h4v-8H17.3q-.4 0-.5-.3l-3.4-3.9q-.1-.2-.1-.5 0-.2.2-.4t.5-.2h20.2q.1 0 .2.2t.1.1 0 .3.1.2v12.5h3.9q.6 0 1 .4t.4.9z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconRetweet.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
