
import * as React from "react"
import shallowCompare from "shallow-compare"
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

class IconSuperscript extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return shallowCompare(this,this.props,nextProps) }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon m--superscript ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M23 30.6v3.7h-5.5l-3.6-5.6-.5-1q-.2-.2-.2-.4h-.1l-.2.4q-.2.5-.6 1l-3.4 5.6H3.1v-3.7H6l4.4-6.5L6.2 18h-3v-3.8h6.1l3.1 5.1q.1.1.6 1l.2.4h.1q0-.2.2-.4l.6-1 3.1-5.1h5.7V18h-2.8L16 23.9l4.6 6.7H23zm14.2-15.2V20H25.8l-.1-.6q-.1-.6-.1-1 0-1.5.6-2.6t1.4-2 1.9-1.4 1.9-1.2 1.4-1.2.6-1.5q0-.8-.6-1.4t-1.6-.5q-1.1 0-2.2.9-.3.2-.8.8l-2.3-2.1q.6-.8 1.4-1.4 1.8-1.5 4.2-1.5 2.4 0 4 1.4T37 8.2q0 1.2-.6 2.3T35 12.2t-1.8 1.3-1.8 1.1-1.5 1.2-.6 1.4h5.1v-1.8h2.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSuperscript;
