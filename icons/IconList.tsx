
import * as React from "react"

export const IconList: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--list ${props.addClass} ${props.className}`
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
                    <g><path d="M5.7 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2T0 25v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zM5.7 3.6v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 20.7V25q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconList.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
