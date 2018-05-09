
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

class IconGraduationCap extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--graduation-cap ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31.1 18.9l.3 5.6q0 1.2-1.5 2.2t-4.1 1.7-5.6.6-5.7-.6-4.1-1.7T9 24.5l.3-5.6 10 3.2q.4.1.9.1t.8-.1zm9.2-5.6q0 .4-.3.5L20.3 20H20L8.6 16.4q-.8.6-1.3 1.9t-.6 3.2q1.1.6 1.1 1.9 0 1.2-1 1.8l1 7.6q.1.3-.1.5-.2.1-.4.1H3.9q-.2 0-.4-.1-.2-.2-.1-.5l1-7.6q-1-.6-1-1.8 0-1.3 1.1-2 .2-3.6 1.7-5.8L.4 13.8q-.4-.1-.4-.5t.4-.6L20 6.6h.3l19.6 6.1q.4.2.4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGraduationCap;
