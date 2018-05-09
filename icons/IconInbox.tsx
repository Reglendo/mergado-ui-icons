
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

class IconInbox extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--inbox ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M25.8 21.4h7.1l-.1-.1q-.1-.1 0-.2L28 10H12.2L7.5 21.1v.2q0 .2-.1.1h7.1l2.1 4.3h7.1zm11.5.7v10.8q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V22.1q0-1.4.6-2.7L8.9 7q.2-.5.8-.9t1.2-.4h18.5q.6 0 1.2.4t.8.9l5.3 12.4q.6 1.3.6 2.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconInbox;
