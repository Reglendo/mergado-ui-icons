
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

class IconHandOLeft extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--hand-o-left ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30.7 31.4h.7V17.1h-.7q-.8 0-1.5-.2t-1.4-.9-1.1-1-1.1-1.2q0-.1-.1-.1t-.1-.1-.1-.1q-1.6-1.8-2.5-3.2-.3-.5-.8-1.6l-.2-.5q-.2-.5-.5-.8t-.4-.8-.5-.6-.4-.3q-1.6 0-2.6.7t-1 2.2q0 .9.4 1.9t.7 1.5.7 1.2.4 1.1H5.7q-1.1 0-2 .8t-.8 2q0 1.2.8 2.1t2 .8h7.4q-.3.4-.6 1.1t-.2 1.2q0 1.5 1.2 2.7-.4.7-.4 1.5t.4 1.6 1.1 1.2q-.1.5-.1 1.3 0 1.9 1 2.8t3.1.9q1.8 0 4.1-.7t4.3-1.5 3.7-.7zm6.4-1.4q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zM40 17.1v14.3q0 1.2-.8 2.1t-2.1.8h-6.4q-1.3 0-5 1.3-4.2 1.5-7 1.5-3.2 0-5.2-1.7t-1.9-4.8v-.2q-1.4-1.6-1.4-3.9 0-.5.1-1-.7-1.3-.8-2.6H5.7q-2.3 0-4-1.7T0 17.1q0-2.3 1.7-4t4-1.7h8.4q-.5-1.3-.5-2.8 0-2.8 1.8-4.2T20 2.9q.8 0 1.5.3t1.3 1.2.9 1.4.8 1.6.7 1.3q.8 1.3 2.3 2.9 0 .1.3.4t.4.5.5.5.5.5.5.4.5.3.5.1h6.4q1.2 0 2.1.8t.8 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHandOLeft;
