
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

class IconViadeoSquare extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--viadeo-square ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M26.4 23.2q0-1.7-.6-3.2-.9.5-1.9.7.5 1.1.5 2.6 0 2.6-1.7 4.4t-4.3 1.8-4.3-1.8-1.8-4.4q0-2.6 1.8-4.5t4.3-1.9q1.2 0 2.2.4.1-.9.6-1.9-1.4-.5-2.8-.5-3.5 0-5.8 2.5t-2.3 5.8 2.3 5.9 5.8 2.3 5.7-2.3 2.3-5.9zm-3.9-7.9v1.6q0 1.4-.1 2.7t-.5 3-.9 2.9-1.5 2.4-2.2 1.5q.4.1.9.1h.2q4.9-3.1 4.9-9.2 0-2.6-.8-5zm0 0q-.1-1.8-1-3.8t-2.2-2.9q2 3.5 3.2 6.7zm7.4-2.3q0-2.3-1.1-3.9-.9 1.9-2.8 2.4-1.5.4-2.4 1.2t-.9 2.2q0 .9.5 1.8 1.7-.4 3.2-1.5t2.1-2.6q-.1 1.1-1.6 2.5t-3.1 2.2q1.1 1.1 2.4 1.1 1.2 0 2-.8t1.4-2q.3-1 .3-2.6zm7.4-3.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconViadeoSquare;
