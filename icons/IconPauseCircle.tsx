
import * as React from "react"

export const IconPauseCircle: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--pause-circle ${props.addClass} ${props.className}`
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
                    <g><path d="M18.7 26.4V13.6q0-.3-.2-.5t-.5-.2h-5.7q-.3 0-.5.2t-.2.5v12.8q0 .3.2.5t.5.2H18q.3 0 .5-.2t.2-.5zm10 0V13.6q0-.3-.2-.5t-.5-.2h-5.7q-.3 0-.5.2t-.2.5v12.8q0 .3.2.5t.5.2H28q.3 0 .5-.2t.2-.5zm8.6-6.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconPauseCircle.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
