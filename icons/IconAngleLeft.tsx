
import * as React from "react"

export const IconAngleLeft: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--angle-left ${props.addClass} ${props.className}`
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
                    <g><path d="M26.5 12.1q0 .3-.2.6l-8.8 8.7 8.8 8.8q.2.2.2.5t-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L13.7 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconAngleLeft.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
