
import * as React from "react"

export const IconHospitalO: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--hospital-o ${props.addClass} ${props.className}`
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
                    <g><path d="M13.1 29.3v1.4q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7V25q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm5.7 0V25q0 .3-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.5q.2 0 .5.3t.2.5zm17.1 11.4v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7V25q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5v-1.4q0-.3.3-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.5q-.2 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.5q.3 0 .5.3t.2.5zm11.4 5.7V25q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zm-5.7-5.7v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.3-.5v-1.4q0-.3.3-.5t.5-.3h1.4q.3 0 .5.3t.2.5zm5.7 0v1.4q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h1.4q.3 0 .5.3t.2.5zm-5.7 19.2h8.6V11.4h-5.7v.7q0 .9-.7 1.6t-1.5.6h-10q-.9 0-1.5-.6t-.6-1.6v-.7H7.4v25.7h8.5v-5q0-.2.2-.5t.5-.2h7.2q.3 0 .5.2t.2.5v5zm0-26.4V3.6q0-.3-.2-.5t-.5-.2h-1.4q-.3 0-.5.2t-.3.5v2.1h-2.8V3.6q0-.3-.2-.5t-.5-.2h-1.5q-.2 0-.5.2t-.2.5v7.1q0 .3.2.5t.5.2h1.5q.3 0 .5-.2t.2-.5V8.6h2.8v2.1q0 .3.3.5t.5.2h1.4q.3 0 .5-.2t.2-.5zm11.4-.7v28.6q0 .5-.4 1t-1 .4H5.9q-.6 0-1-.4t-.4-1V10q0-.6.4-1t1-.4h7.2V2.1q0-.8.6-1.5t1.5-.6h10q.9 0 1.5.6t.7 1.5v6.5h7.1q.6 0 1 .4t.4 1z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconHospitalO.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
