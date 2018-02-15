
import * as React from "react"

export const IconMeanpath: React.SFC<any> = props => {
    const name = "muk-icon";
    const className = `muk-icon ${name}--meanpath ${props.addClass} ${props.className}`
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
                    <g><path d="M32.3 18.8v2.5q0 .6-.3.9t-.9.3h-4.5q-.5 0-.8-.3t-.3-.9v-2.5q0-.5.3-.9t.8-.3h4.5q.6 0 .9.3t.3.9zm-11 5.1v-5.5q0-1.2-.7-2t-1.9-.7h-3q-1.5 0-2.1 1.2-.6-1.2-2.2-1.2H8.5q-1.1 0-1.9.7t-.7 2v5.5q0 .5.5.5h1.2q.5 0 .5-.5v-5.1q0-.5.3-.9t.9-.3h2q.6 0 .9.3t.3.9v5.1q0 .5.5.5h1.2q.5 0 .5-.5v-5.1q0-.5.3-.9t.8-.3H18q.5 0 .8.3t.3.9v5.1q0 .5.5.5h1.3q.4 0 .4-.5zm13.2-2.1v-3.5q0-1.1-.8-1.9t-1.9-.7h-5.9q-1.2 0-1.9.7t-.7 1.9v9.2q0 .5.5.5H25q.5 0 .5-.5v-4q.6.9 2.1.9h4.2q1.2 0 1.9-.7t.8-1.9zM37.3 8v24q0 2.1-1.5 3.6t-3.7 1.5H8.2q-2.2 0-3.7-1.5T3 32V8q0-2.1 1.5-3.6t3.7-1.5h23.9q2.1 0 3.7 1.5T37.3 8z"></path></g>
                </svg>
                {props.text && !props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {props.text}
                    </span>
                }
            </span>
        )
}

IconMeanpath.defaultProps = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
}
