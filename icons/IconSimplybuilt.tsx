
import * as React from "react"

export const IconSimplybuilt: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--simplybuilt ${props.addClass} ${props.className}`
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
                    <g><path d="M16.8 22.6q0-2.1-1.6-3.7t-3.7-1.5-3.7 1.5-1.6 3.7 1.6 3.7 3.7 1.6 3.7-1.6 1.6-3.7zm16.7 0q0-2.2-1.5-3.7t-3.7-1.5-3.8 1.5-1.5 3.7q0 2.2 1.5 3.7t3.8 1.6 3.7-1.6 1.5-3.7zm6.3-15.7v26.2q0 .8-.7 1.4t-1.4.7H2.1q-.9 0-1.5-.7T0 33.1V6.9q0-.8.6-1.4t1.5-.7h8.4q.8 0 1.4.7t.7 1.4V10h14.6V6.9q0-.8.6-1.4t1.5-.7h8.4q.8 0 1.4.7t.7 1.4z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconSimplybuilt.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
