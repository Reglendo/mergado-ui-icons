
import * as React from "react"

export const IconFacebook: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--facebook ${props.addClass} ${props.className}`
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
                    <g><path d="M29.4.3v5.9h-3.5q-1.9 0-2.6.8t-.7 2.4v4.2h6.6l-.9 6.6h-5.7v16.9h-6.8V20.2h-5.7v-6.6h5.7V8.7q0-4.1 2.3-6.4T24.3 0q3.3 0 5.1.3z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFacebook.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
