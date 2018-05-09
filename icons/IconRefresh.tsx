
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

class IconRefresh extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--refresh ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M36.7 23.6v.1q-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-.4.4-1 .4t-1-.4-.4-1v-10q0-.6.4-1t1-.4h10q.6 0 1 .4t.5 1-.5 1l-3 3q1.6 1.5 3.6 2.3t4.1.8q3 0 5.6-1.4t4.2-4q.2-.4 1.2-2.6.1-.5.6-.5H36q.3 0 .5.2t.2.5zm.6-17.9v10q0 .6-.4 1t-1 .4h-10q-.6 0-1-.4t-.5-1 .5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-.2.4-1.2 2.6-.2.5-.6.5H4.1q-.3 0-.5-.2t-.2-.5v-.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q.4-.4 1-.4t1 .4.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconRefresh;
