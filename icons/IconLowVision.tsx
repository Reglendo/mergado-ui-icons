
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconLowVision extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--low-vision ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M7.5 30.3q-.1 0-.2-.1Q5.4 29 3.6 27T.5 23q-.5-.7-.5-1.6V21q0-.2.1-.4t.2-.4.2-.4.2-.3.2-.4.3-.3.2-.3q4.2-5.6 10.1-8.2-2.4-4.4-2.4-4.7 0-.4.4-.6 2.6-1.5 2.8-1.5.4 0 .6.4L15.7 9q2.1-.4 4.3-.4 5.9 0 11.1 3t8.5 8.3q.4.7.4 1.5t-.4 1.6q-2.1 3.1-4.9 5.6t-6.2 3.9q2.4 4.5 2.4 4.8 0 .4-.4.6-2.6 1.4-2.8 1.4-.4 0-.6-.3l-2.8-5.1-1.4-2.7-10-18.3.2-.2q-1.3.6-2.2 1.1.1.1 2.8 5.2t5.5 10 2.6 5q0 .2-.2.2-.3.1-1.6.1t-1.3-.2L8.5 15.4q-.9.6-1.8 1.5.5.9 4.7 8.8t4.3 7.9q0 .2-.3.2t-1.8-.5-1.6-.6l-2.4-4.4-5-9.2q-1 1.1-1.7 2.3 0 .1.4.6t.5.7L7.7 30q0 .3-.2.3zM26 28l1.1 2q6.1-2.5 10-8.6-4-6.2-10.2-8.7 1.5 1.5 2.3 3.4T30 20q0 2.4-1.1 4.5T26 28zm-7.1-13.7q0 .4.3.7t.8.4q1.9 0 3.3 1.3t1.3 3.3q0 .4.4.8t.7.3.8-.3.3-.8q0-2.8-2-4.8t-4.8-2q-.4 0-.8.3t-.3.8zm8.2-1.5l-.2-.1.2.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLowVision;
