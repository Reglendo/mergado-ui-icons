
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

class IconLeaf extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--leaf ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M28.6 15.7q0-.6-.5-1t-1-.4q-3.8 0-7.1 1.1t-5.7 3T9 23.3q-.4.5-.4 1 0 .6.4 1t1 .4q.5 0 1-.4.6-.5 1.7-1.6t1.5-1.5q3-2.7 5.9-3.9t7-1.2q.6 0 1-.4t.5-1zM40 11.3q0 2.1-.4 4.3-1.1 5-4.2 8.6t-7.9 5.9q-4.8 2.4-9.8 2.4-3.3 0-6.4-1-.3-.1-2-.9t-2.1-.9q-.4 0-.9.7t-1 1.6-1.2 1.6-1.3.7q-.7 0-1.1-.3t-.7-.5-.6-.9q-.1-.1-.2-.3t-.1-.2-.1-.2 0-.3q0-.8.7-1.7t1.5-1.4 1.5-1.3.7-1q0-.1-.3-.9t-.3-1q-.2-1.1-.2-2.3 0-2.6.9-4.9T7.2 13 11 9.9t4.5-2.2q1.3-.4 3.3-.5t4-.2 4-.2 3.6-.5T32.9 5l.7-.6.7-.6.6-.5.8-.3 1-.1q.8 0 1.5 1t1.1 2.5.5 2.8.2 2.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLeaf;
