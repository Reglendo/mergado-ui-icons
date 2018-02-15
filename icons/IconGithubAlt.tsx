
import * as React from "react"

export const IconGithubAlt: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--github-alt ${props.addClass} ${props.className}`
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
                    <g><path d="M15.8 27.1q0 .9-.3 1.9t-1 1.7-1.6.7-1.6-.7-1-1.7-.2-1.9.3-1.8.9-1.7 1.6-.7 1.6.7 1 1.7.3 1.8zm14.3 0q0 .9-.3 1.9t-1 1.7-1.6.7-1.6-.7-1-1.7-.2-1.9.2-1.8 1-1.7 1.6-.7 1.6.7 1 1.7.3 1.8zm3.5 0q0-2.6-1.5-4.5t-4.2-1.9q-.9 0-4.3.5-1.6.2-3.5.2t-3.5-.2q-3.4-.5-4.4-.5-2.6 0-4.2 1.9t-1.5 4.5q0 2 .7 3.5T9 32.9t2.7 1.3 3.2.7 3.3.1h3.7q1.9 0 3.4-.1t3.1-.7 2.7-1.3 1.8-2.3.7-3.5zm5-3.9q0 4.6-1.3 7.4-.9 1.7-2.4 3t-3.1 1.9-3.8 1.1-3.8.4-3.8.1h-3.1q-1.4 0-3.3-.3t-3.4-.7T7.5 35t-2.7-1.8-1.9-2.6q-1.4-2.7-1.4-7.4 0-5.3 3-8.8-.6-1.9-.6-3.8 0-2.6 1.2-4.9 2.4 0 4.2.9t4.2 2.8q3.3-.8 6.9-.8 3.3 0 6.3.7 2.3-1.8 4.2-2.7t4.2-.9q1.1 2.3 1.1 4.9 0 1.9-.6 3.7 3 3.6 3 8.9z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconGithubAlt.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
