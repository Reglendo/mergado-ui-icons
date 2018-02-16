
import * as React from "react"

export const IconSitemap: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--sitemap ${props.addClass} ${props.className}`
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
                    <g><path d="M40 27.9V35q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3H21.4v4.3h2.2q.9 0 1.5.6t.6 1.6V35q0 .9-.6 1.5t-1.5.6h-7.2q-.9 0-1.5-.6t-.6-1.5v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3H7.1v4.3h2.2q.9 0 1.5.6t.6 1.6V35q0 .9-.6 1.5t-1.5.6H2.1q-.9 0-1.5-.6T0 35v-7.1q0-.9.6-1.6t1.5-.6h2.2v-4.3q0-1.1.8-2t2-.8h11.5v-4.3h-2.2q-.9 0-1.5-.6t-.6-1.6V5q0-.9.6-1.5t1.5-.6h7.2q.9 0 1.5.6t.6 1.5v7.1q0 .9-.6 1.6t-1.5.6h-2.2v4.3h11.5q1.1 0 2 .8t.8 2v4.3h2.2q.9 0 1.5.6t.6 1.6z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconSitemap.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconSitemap;
