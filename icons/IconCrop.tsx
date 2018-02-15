
import * as React from "react"

export const IconCrop: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--crop ${props.addClass} ${props.className}`
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
                    <g><path d="M13.9 28.6h13.3V15.3zm-1-1l13.3-13.3H12.9v13.3zm25.7 1.7v4.3q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-5H7.9q-.3 0-.5-.2t-.2-.5V14.3h-5q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h5v-5q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v5h19l5.5-5.5q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5l-5.5 5.5v19h5q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconCrop.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
