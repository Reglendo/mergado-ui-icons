
import * as React from "react"

export const IconFileCodeO: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--file-code-o ${props.addClass} ${props.className}`
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
                    <g><path d="M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zm-20.7-20q.2-.2.5-.2t.5.1l1.2.9q.2.1.2.4t-.1.6l-4.1 5.4 4.1 5.4q.2.3.1.5t-.2.5l-1.2.9q-.2.1-.5.1t-.5-.3l-5-6.7q-.3-.4 0-.8zm17.9 6.8q.3.4 0 .8l-5 6.7q-.2.3-.5.3t-.5-.1l-1.2-.9q-.2-.2-.3-.5t.2-.5l4.1-5.4-4.1-5.4q-.2-.3-.2-.6t.3-.4l1.2-.9q.2-.2.5-.1t.5.2zM17.8 34.2q-.3-.1-.5-.3t-.1-.6l3.1-18.5q0-.3.3-.5t.5-.1l1.4.2q.3.1.5.3t.1.5L20 33.8q0 .3-.3.5t-.5.1z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconFileCodeO.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconFileCodeO;
