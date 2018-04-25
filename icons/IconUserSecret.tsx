
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

class IconUserSecret extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--user-secret ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M17.4 34.3l2.1-10-2.1-2.9-2.9-1.4zm5.7 0L25.9 20l-2.8 1.4-2.2 2.9zm3.5-22.6v-.1q-.3-.2-2.2-.2-1.6 0-3.7.5h-1q-2.1-.5-3.7-.5-1.9 0-2.1.2l-.1.1q0 .4.1.6 0 .1.1.2t.2.2q.1.1.2.5t.1.4.2.4.2.4.2.3.3.3.3.2.4.2.4.1.6 0q.8 0 1.3-.2t.7-.7.3-.8.3-.6.4-.3h.3q.2 0 .3.3t.3.6.3.8.7.7 1.4.2h.5q.2 0 .5-.1t.4-.2.3-.2.2-.3.2-.3.2-.4.2-.4.2-.4.1-.5l.2-.2.2-.2v-.6zm9.3 19.7q0 2.7-1.6 4.2T30 37.1H10.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.4.1-2.7t.4-2.8.9-2.7 1.4-2.3 2.1-1.7l-2-4.9h4.7q-.5-1.4-.5-2.9 0-.2.1-.7-4.3-.9-4.3-2.1 0-1.3 4.6-2.2.4-1.4 1.2-3T14.8.8q.7-.8 1.7-.8.6 0 1.8.7t1.9.7 1.9-.7T24 0q.9 0 1.7.8.8 1 1.5 2.6t1.2 3q4.7.9 4.7 2.2 0 1.2-4.4 2.1.2 1.8-.4 3.6h4.8l-1.9 5q1.5.7 2.4 2.2t1.5 3.2.7 3.3.1 3.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUserSecret;
