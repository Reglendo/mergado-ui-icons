
import * as React from "react"

export const IconMergado: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--mergado ${props.addClass} ${props.className}`
    return (
            <span className={className} style={props.style} title={props.title}>
                {props.textFirst && textEl }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={props.color}
                     stroke={props.color}
                     strokeWidth={0}
                     height={props.size}
                     width={props.size}
                     viewBox={props.viewBox}
                >
                    <g><path d="M0 0l20 20L0 40z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#7fba2c"></path><path d="M0 40l20-20 20 20z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#007b20"></path><path d="M40 40L20 20 40 0z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#00a9b8"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconMergado.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconMergado;
