
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

class IconGetPocket extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--get-pocket ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.9 2.9q1.5 0 2.5 1t1 2.4v11.6q0 4-1.5 7.5t-4.1 6.2-6.1 4-7.5 1.5q-3.9 0-7.5-1.5t-6.1-4-4.1-6.2T1 17.9V6.3q0-1.4 1-2.4t2.5-1h31.4zM20.2 26.6q1.1 0 1.8-.7l9.1-8.7q.8-.8.8-1.9 0-1.1-.8-1.9t-1.8-.7q-1.1 0-1.9.7l-7.2 6.9-7.2-6.9q-.8-.7-1.8-.7-1.1 0-1.9.7t-.7 1.9q0 1.2.8 1.9l9 8.7q.7.7 1.8.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGetPocket;
