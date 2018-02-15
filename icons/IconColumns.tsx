
import * as React from "react"

export const IconColumns: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--columns ${props.addClass} ${props.className}`
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
                    <g><path d="M5.1 34.3h13.5V8.6H4.4v25q0 .3.2.5t.5.2zm30.7-.7v-25H21.5v25.7h13.6q.3 0 .5-.2t.2-.5zm2.8-27.2v27.2q0 1.4-1 2.5t-2.5 1h-30q-1.5 0-2.5-1t-1.1-2.5V6.4q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconColumns.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
