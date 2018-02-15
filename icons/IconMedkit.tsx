
import * as React from "react"

export const IconMedkit: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--medkit ${props.addClass} ${props.className}`
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
                    <g><path d="M28.6 25v-4.3q0-.3-.2-.5t-.5-.2h-5v-5q0-.3-.2-.5t-.6-.2h-4.2q-.4 0-.6.2t-.2.5v5h-5q-.3 0-.5.2t-.2.5V25q0 .3.2.5t.5.2h5v5q0 .3.2.5t.6.2h4.2q.4 0 .6-.2t.2-.5v-5h5q.3 0 .5-.2t.2-.5zM14.3 8.6h11.4V5.7H14.3v2.9zm-8.6 0v28.5H5q-2.1 0-3.5-1.4T0 32.1V13.6q0-2.1 1.5-3.6T5 8.6h.7zm26.4 0v28.5H7.9V8.6h3.5V5q0-.9.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h3.5zm7.9 5v18.5q0 2.1-1.5 3.6T35 37.1h-.7V8.6h.7q2.1 0 3.5 1.4t1.5 3.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMedkit.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
