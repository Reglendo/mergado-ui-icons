
import * as React from "react"

export const IconMuk: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--muk ${props.addClass} ${props.className}`
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
                    <g><path d="M0 0l20 20L0 40z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#6858e8"></path><path d="M0 40l20-20 20 20z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#29235c"></path><path d="M40 40L20 20 40 0z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#2d95d3"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMuk.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40.000003 39.999999",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
