
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

class IconPlus extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--plus ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.9 16.4v4.3q0 .9-.6 1.5t-1.5.7h-9.3v9.2q0 .9-.6 1.6t-1.5.6h-4.3q-.9 0-1.5-.6t-.7-1.6v-9.2H6.6q-.9 0-1.5-.7t-.6-1.5v-4.3q0-.9.6-1.5t1.5-.6h9.3V5q0-.9.7-1.5t1.5-.6h4.3q.9 0 1.5.6t.6 1.5v9.3h9.3q.9 0 1.5.6t.6 1.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPlus;
