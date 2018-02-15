
import * as React from "react"

export const IconTimesCircle: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--times-circle ${props.addClass} ${props.className}`
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
                    <g><path d="M28.6 25q0-.5-.4-1l-4-4 4-4q.4-.5.4-1 0-.6-.4-1.1l-2-2q-.4-.4-1-.4t-1 .4L20.1 16l-4-4.1q-.4-.4-1-.4t-1 .4l-2 2q-.5.5-.5 1.1 0 .5.5 1l4 4-4 4q-.5.5-.5 1 0 .7.5 1.1l2 2q.4.4 1 .4t1-.4l4-4.1 4.1 4.1q.4.4 1 .4t1-.4l2-2q.4-.4.4-1zm8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconTimesCircle.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
