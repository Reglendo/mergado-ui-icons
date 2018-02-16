
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconSnapchatSquare extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--snapchat-square ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M31.6 25.6q0-.5-.5-.6-1.5-.3-2.7-1.3t-1.7-2.4q-.2-.3-.2-.6t.4-.5 1-.4.9-.5.5-.8q0-.4-.4-.7t-.9-.3q-.2 0-.7.2t-.7.2q-.1 0-.3-.1.1-1.4.1-2.5 0-1.8-.3-2.6-.8-1.7-2.3-2.7t-3.4-1q-4.5 0-6.2 3.7-.4.9-.4 2.6 0 .8.2 2.5-.3.1-.4.1-.2 0-.7-.2t-.7-.2q-.4 0-.8.3t-.4.7q0 .5.4.8t1 .5.9.4.5.5q0 .3-.2.6-1.4 3.1-4.4 3.7-.5.1-.5.6 0 1.1 3.1 1.6 0 .1.1.5t.3.7.5.2q.3 0 .8-.1t.9-.1q.8 0 1.5.4t1.2.7 1.3.7 1.7.3q1 0 1.8-.3t1.3-.7 1.2-.7 1.5-.4q.3 0 .8.1t.9.1q.4 0 .5-.2t.3-.7.1-.5q3.1-.5 3.1-1.6zm5.7-16.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSnapchatSquare;
