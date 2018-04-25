
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

class IconFighterJet extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--fighter-jet ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.9 21.3q-.1.7-6 2l-7.3.7-4.7 1.3h-1.3l-6.1 7.3h1.4q.6 0 1 .1t.4.3-.4.2-1 .1H9.3v-.7h1.3V24H7.3l-4 4.6h-2L.7 28v-4h.6v-.7H4v-.1l-4-.5V20l4-.5v-.2H1.3v-.6H.7v-4l.6-.7h2l4 4.7h3.3V10H9.3v-.6h6.6q.6 0 1 .1t.4.2-.4.2-1 .1h-1.4l6.1 7.3h1.3l4.7 1.4 7.3.6q5.4 1.2 5.9 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFighterJet;
