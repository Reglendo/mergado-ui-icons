
import * as React from "react"

export const IconSortAlphaDesc: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--sort-alpha-desc ${props.addClass} ${props.className}`
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
                    <g><path d="M27.6 32h3.9l-1.6-4.9-.2-1.1q-.1-.3-.1-.4h-.1v.4q0 .1-.1.4t-.2.7zm-10.2.1q0 .3-.2.6l-7.1 7.1q-.2.2-.5.2t-.5-.2l-7.2-7.1q-.3-.4-.1-.8.1-.5.6-.5h4.3V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v30.7h4.3q.3 0 .5.2t.2.5zm20.7 5.5V40h-6.5v-2.4h1.7l-1-3.2h-5.5l-1 3.2h1.7V40h-6.4v-2.4h1.5l5.2-14.7h3.6l5.1 14.7h1.6zm-2-25.7v5.2h-13v-2l8.2-11.8q.3-.4.5-.6l.2-.2h-6.2v2.6h-2.6V0h12.6v2l-8.2 11.8q-.2.2-.5.6l-.2.2v.1l.3-.1h6.2v-2.7h2.7z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconSortAlphaDesc.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconSortAlphaDesc;
