
import * as React from "react"

export const IconTablet: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--tablet ${props.addClass} ${props.className}`
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
                    <g><path d="M21.3 31.4q0-.5-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .5 1-.5.4-1zm8.6-3.5V6.4q0-.3-.3-.5t-.5-.2H10.6q-.3 0-.5.2t-.2.5v21.5q0 .2.2.5t.5.2h18.5q.3 0 .5-.2t.3-.5zm2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1H10.6q-1.5 0-2.6-1.1t-1-2.5V6.4Q7 5 8.1 3.9t2.5-1h18.5q1.5 0 2.6 1t1 2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconTablet.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
