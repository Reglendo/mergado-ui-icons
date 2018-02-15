
import * as React from "react"

export const IconFacebookOfficial: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--facebook-official ${props.addClass} ${props.className}`
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
                    <g><path d="M35.4 2.9q.8 0 1.3.5t.6 1.4v30.4q0 .8-.6 1.4t-1.3.5h-8.7V23.9h4.4l.7-5.2h-5.1v-3.3q0-1.3.5-1.9t2-.6h2.7V8.2Q30.5 8 28 8q-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2H4.9q-.8 0-1.3-.5T3 35.2V4.8q0-.8.6-1.4t1.3-.5h30.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconFacebookOfficial.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
