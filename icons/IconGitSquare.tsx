
import * as React from "react"

export const IconGitSquare: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--git-square ${props.addClass} ${props.className}`
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
                    <g><path d="M16 29.2q0 1.5-2.1 1.5-2.4 0-2.4-1.4 0-1.5 2.2-1.5 2.3 0 2.3 1.4zm-.8-10.4q0 1.9-1.7 1.9t-1.7-1.9q0-2 1.7-2 .8 0 1.3.6t.4 1.4zm3.7-1.7v-2.8q-1.7.7-3 .7-1.1-.7-2.5-.7-1.9 0-3.2 1.3t-1.3 3.2q0 1.1.6 2.3t1.7 1.5q-.9.4-.9 1.9 0 1.2.9 1.8-2.5.8-2.5 3.1 0 1 .5 1.8t1.2 1.1 1.6.6 1.8.2q5 0 5-4.2 0-1.5-1.1-2.2t-2.8-1.1q-.6-.1-1.2-.4t-.5-.9q0-1 1.1-1.2 1.7-.3 2.7-1.5t1-3q0-.6-.2-1.2.8-.2 1.1-.3zm1.3 9.4h3.1q-.1-.6-.1-1.9V16q0-1 .1-1.5h-3.1q.1.5.1 1.6v8.7q0 1.1-.1 1.7zm11.4-.4v-2.7q-.7.5-1.5.5-1.2 0-1.2-1.8V17H30q.2 0 .6.1t.6 0v-2.6h-2.3v-2.3h-3.1q.1.5.1 1.2v1.1h-1.3v2.6l.8-.1h.5v6.4q0 .7.3 1.2t.5 1.1 1 .7 1.5.3q1.4 0 2.4-.6zm-8-15.7q0-.8-.5-1.5t-1.4-.6-1.3.6-.5 1.5q0 .8.5 1.4t1.3.5 1.4-.6.5-1.3zm13.7-1.1v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconGitSquare.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
