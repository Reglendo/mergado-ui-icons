
import * as React from "react"

export const IconGgCircle: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--gg-circle ${props.addClass} ${props.className}`
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
                    <g><path d="M16 30.2l6.1-6-6.3-6.3-1.9 2 4.2 4.3-2.1 2.1-6.2-6.2 6.2-6.2.9.9 1.9-2L16 10 5.9 20.1zm8-.2l10.1-10.1L24 9.8l-6.1 6 6.3 6.3 1.9-2-4.2-4.3 2.1-2.1 6.2 6.2-6.2 6.2-.9-.9-1.9 2zm16-10q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconGgCircle.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
