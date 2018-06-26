
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconPagelines extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--pagelines ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 24.6q-.7 1.8-1.7 3.1t-2 2-2.2 1-2.3.3-2.2-.2-1.9-.4-1.5-.7-1.1-.5l-.4-.2q-2.5 5.1-6.4 8t-8.6 3q-.4 0-.7-.3t-.3-.7.3-.7.7-.3q3.9 0 7.2-2.4t5.6-6.6q-.8.4-1.6.6t-1.8.2-2.1 0-2-.6-2.1-1.4-1.9-2.2-1.6-3.3q2.5-1 4.7-1.2t3.8.1 2.7 1.3 2 1.7 1.3 1.9q1.2-3 1.7-6.5H21q-.3 0-1 .1t-1.5 0-1.9-.3-1.9-.5-1.9-.9-1.7-1.5-1.2-2.1-.6-2.8q1.5-.7 2.9-.9t2.5.1 2.1.6 1.6 1.2 1.3 1.3.9 1.4.6 1.3.4.9l.1.3q.3-2.7.3-4.3-.2-.2-.5-.4t-1.1-1-1.4-1.6-1.2-2.1-.8-2.5.3-2.8T18.9 0q1.6.6 2.8 1.4t1.9 1.7T24.7 5t.4 2 0 1.9-.3 1.7-.4 1.4-.4.9l-.1.3V16q0-.2.2-.4t.7-1 1.1-1.3 1.6-1.2 2-1 2.5-.4 3 .6q-.1 1.7-.5 3.1t-1.1 2.4-1.6 1.6-1.8 1-1.9.5-1.8.2-1.5 0-1-.1l-.4-.1q-.5 3.3-1.6 6.4.1-.2.4-.5t1.1-.9 1.7-1.1 2.2-1 2.7-.4 2.8.5 3.1 1.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPagelines;
