
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

class IconWpforms extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--wpforms ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M14.5 20.3v2.9H8.9v-2.9h5.6zm0-5.7v2.9H8.9v-2.9h5.6zM31.4 26v2.9h-7.6v-2.8h7.6zm0-5.7v2.9h-15v-2.9h15zm0-5.7v2.9h-15v-2.9h15zm3 19.2V6.2q0-.2-.1-.4t-.3-.1h-.7l-8.5 5.7-4.7-3.8-4.6 3.8L7 5.7h-.7q-.2 0-.3.1t-.1.4v27.6q0 .2.1.4t.3.1H34q.2 0 .3-.1t.1-.4zM15.3 9.1l4.2-3.4h-9.1zm9.6 0l5-3.4h-9.1zm12.4-2.9v27.6q0 1.4-1 2.4t-2.3.9H6.3q-1.4 0-2.3-.9t-1-2.4V6.2q0-1.4 1-2.4t2.3-.9H34q1.4 0 2.3.9t1 2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconWpforms;
