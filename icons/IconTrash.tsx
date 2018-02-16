
import * as React from "react"

export const IconTrash: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--trash ${props.addClass} ${props.className}`
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
                    <g><path d="M15.9 30.7V15q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm5.7 0V15q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm5.8 0V15q0-.3-.2-.5t-.6-.2h-1.4q-.3 0-.5.2t-.2.5v15.7q0 .3.2.5t.5.2h1.4q.4 0 .6-.2t.2-.5zM15.2 8.6h10L24.1 6q-.1-.2-.3-.3h-7.1q-.2.1-.4.3zm20.7.7v1.4q0 .3-.2.5t-.5.2h-2.1v21.2q0 1.8-1.1 3.2t-2.5 1.3H10.9q-1.4 0-2.5-1.3t-1-3.1V11.4H5.2q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h6.9l1.6-3.8q.3-.8 1.2-1.4t1.7-.5h7.2q.9 0 1.8.5t1.2 1.4l1.5 3.8h6.9q.3 0 .5.2t.2.5z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTrash.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTrash;
