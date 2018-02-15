
import * as React from "react"

export const IconGoogleAnalytics: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--google-analytics ${props.addClass} ${props.className}`
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
                    <g><g transform="translate(0 -286.417)"><rect width="23.347" height="26.465" x="13.333" y="299.952" rx="4.696" fill="#ffc107"></rect><rect width="23.258" height="12.929" y="313.488" rx="2.741" fill="#ffc107"></rect><path d="M29.347 286.417c-1.486 0-2.68 1.17-2.68 2.624v37.376h10.65c1.486 0 2.683-1.172 2.683-2.627v-34.749c0-1.455-1.197-2.624-2.682-2.624z" fill="#f57c00"></path></g></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconGoogleAnalytics.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
