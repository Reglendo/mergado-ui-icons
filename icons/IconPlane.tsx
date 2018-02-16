
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

class IconPlane extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--plane ${p.addClass} ${p.className}`
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
                        <g><path d="M34.7 3.6q1 1.1.3 3.3t-2.4 3.8L29 14.3l3.5 15.5q.2.5-.2.8l-2.9 2.1q-.1.2-.4.2-.1 0-.2-.1-.3 0-.4-.3l-6.3-11.4-5.7 5.8 1.1 4.4q.2.3-.1.6l-2.2 2.2q-.2.2-.5.2-.4-.1-.6-.3l-4.2-5.6-5.6-4.2Q4 24 4 23.6q0-.2.2-.5l2.1-2.2q.2-.2.6-.2H7l4.4 1.2 5.7-5.8L5.8 9.9q-.3-.2-.4-.5 0-.4.2-.6l2.9-2.9q.3-.3.7-.2L24 9.3l3.6-3.6q1.7-1.7 3.8-2.4t3.3.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPlane;
