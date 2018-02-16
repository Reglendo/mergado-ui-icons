
import * as React from "react"

export const IconTty: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--tty ${props.addClass} ${props.className}`
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
                    <g><path d="M10 29.3v4.3q0 .3-.2.5t-.5.2H5q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm-4.3-8.6V25q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2T0 25v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm12.9 8.6v4.3q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm-4.3-8.6V25q0 .3-.2.5t-.5.2H9.3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zM1.5 17.1q-.7 0-1.1-.4t-.4-1v-2.9h11.5v2.9q0 .6-.5 1t-1 .4H1.5zm25.6 12.2v4.3q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm-4.2-8.6V25q0 .3-.2.5t-.6.2h-4.2q-.4 0-.6-.2t-.2-.5v-4.3q0-.3.2-.5t.6-.2h4.2q.4 0 .6.2t.2.5zm12.8 8.6v4.3q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H35q.3 0 .5.2t.2.5zm-4.3-8.6V25q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm8.6-9.1v.3H28.5v-.2q0-2.3-8.5-2.3t-8.5 2.3v.2H0v-.3q0-.4.2-1t.7-1.4 1.5-1.7 2.5-1.7 3.5-1.5 5-1 6.6-.4 6.5.4 5 1 3.6 1.5 2.5 1.7 1.5 1.7.7 1.4.2 1zm0 9.1V25q0 .3-.2.5t-.5.2H35q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm0-7.9v2.9q0 .6-.4 1t-1.1.4H30q-.6 0-1.1-.4t-.4-1v-2.9H40z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconTty.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconTty;
