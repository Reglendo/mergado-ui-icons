
import * as React from "react"

export const IconStore: React.SFC<any> = props => {
    const name = "muk-icon";
    const textEl = props.text ? <span className={`muk-icon__text`}>{props.text}</span> : false
    const className = `muk-icon ${name}--store ${props.addClass} ${props.className}`
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
                    <g><path d="M0 14.507c0 2.272 1.597 4.165 3.75 4.711v16.04l-.016 1.22c0 .675.562 1.22 1.25 1.22h30.037c.6-.254 1.261-.092 1.229-2.44v-16.04c2.153-.546 3.75-2.439 3.75-4.71v-1.221H0zm25 4.883c2.764 0 5-2.186 5-4.883 0 2.272 1.597 4.165 3.75 4.711v16.04H15V19.39c2.764 0 5-2.186 5-4.883 0 2.697 2.241 4.883 5 4.883zm-11.25-.172v16.04h-7.5v-16.04c2.153-.546 3.75-2.439 3.75-4.71 0 2.271 1.597 4.164 3.75 4.71zM35 2.301H5l-5 9.765h40zM10.562 5.014l-2.5 4.883a.632.632 0 0 1-.84.274.602.602 0 0 1-.279-.818l2.5-4.882c.157-.3.53-.422.838-.275.31.15.432.518.28.818zm5 0l-2.5 4.883a.632.632 0 0 1-.84.274.602.602 0 0 1-.279-.818l2.5-4.882a.637.637 0 0 1 .838-.275c.31.15.432.518.28.818zm12.24 5.145a.633.633 0 0 1-.849-.241L24.22 5.036a.601.601 0 0 1 .249-.828.633.633 0 0 1 .85.241l2.734 4.883a.605.605 0 0 1-.25.827zm4.976.012a.595.595 0 0 1-.278.064.62.62 0 0 1-.557-.338l-2.5-4.883a.602.602 0 0 1 .279-.818.636.636 0 0 1 .84.275l2.5 4.882c.15.3.029.668-.284.818zM9.427 28.12c-.047-2.727.003-2.657.886-2.657.374 0 .555-.109.555 2.609 0 .427.434.634.434 1.083 0 .674-.557 1.22-1.25 1.22-.689 0-1.25-.546-1.25-1.22 0-.449.258-.82.625-1.035z"></path></g>
                </svg>
                {!props.textFirst && textEl }
            </span>
        )
}
IconStore.defaultProps = {
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
}
export default IconStore;
