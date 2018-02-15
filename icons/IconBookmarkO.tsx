
import * as React from "react"

export const IconBookmarkO: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--bookmark-o ${props.addClass} ${props.className}`
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
                    <g><path d="M31.2 5.7H8.4v27.7l11.4-10.9 2 1.9 9.4 9V5.7zm.3-2.8q.5 0 1 .2.7.2 1.1.9t.5 1.4v28.7q0 .8-.5 1.4t-1.1.9q-.5.2-1 .2-1.1 0-1.9-.7l-9.8-9.5-9.9 9.5q-.8.7-1.8.7-.5 0-1-.2-.7-.3-1.2-.9t-.4-1.4V5.4q0-.8.4-1.4t1.2-.9q.5-.2 1-.2h23.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconBookmarkO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
