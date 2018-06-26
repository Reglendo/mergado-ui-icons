
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

class IconAnchor extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--anchor ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M21.4 5.7q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zM40 26.4v7.9q0 .5-.4.7h-.3q-.3 0-.5-.2l-2.1-2.1q-2.7 3.2-7.1 5.1T20 39.6t-9.6-1.8-7.1-5.1l-2.1 2.1q-.2.2-.5.2H.4q-.4-.2-.4-.7v-7.9q0-.3.2-.5t.5-.2h7.9q.5 0 .6.5.2.4-.1.7l-2.2 2.3q1.5 2 4.2 3.4t6 1.8V20h-4.2q-.6 0-1-.4t-.5-1v-2.9q0-.6.5-1t1-.4h4.2v-3.6q-1.2-.8-2-2.1t-.8-2.9q0-2.4 1.7-4T20 0t4 1.7 1.7 4q0 1.6-.8 2.9t-2 2v3.7h4.2q.6 0 1 .4t.5 1v2.9q0 .6-.5 1t-1 .4h-4.2v14.4q3.3-.4 6-1.8t4.2-3.4l-2.2-2.3q-.3-.3-.1-.7.1-.5.6-.5h7.9q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAnchor;
