
import * as React from "react"

export const IconRouble: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--rouble ${props.addClass} ${props.className}`
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
                    <g><path d="M28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6zm5.3 0q0 4.3-2.9 7T24 22.4h-7.6V25h11.2q.4 0 .6.2t.2.5v2.9q0 .3-.2.5t-.6.2H16.4v4.3q0 .3-.2.5t-.5.2h-3.8q-.3 0-.5-.2t-.2-.5v-4.3h-5q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h5v-2.6h-5q-.3 0-.5-.2t-.2-.6v-3.3q0-.3.2-.5t.5-.2h5v-14q0-.3.2-.5t.5-.2H24q4.4 0 7.2 2.7t2.9 7z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconRouble.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
