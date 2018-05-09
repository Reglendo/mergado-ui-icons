
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

class IconBellSlash extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--bell-slash ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30.2 19.1q1.2 7 5.8 10.8 0 1-.7 1.8t-1.8.7h-8.7q0 2.1-1.4 3.5t-3.5 1.5-3.5-1.5-1.5-3.5zM19.9 35.8q.3 0 .3-.3t-.3-.3q-1.2 0-2-.8t-.8-2q0-.3-.3-.3t-.3.3q0 1.4 1 2.4t2.4 1zm19.4-31q.2.2.2.4t-.2.5L2.9 37.2q-.2.1-.4.1t-.4-.2L.4 35.2q-.1-.2-.1-.4t.2-.5l3.6-3.1q-.4-.6-.4-1.3 1-.8 1.8-1.7t1.6-2.3 1.5-3.1 1-4 .3-5q0-3 2.3-5.5t6-3.1q-.2-.3-.2-.7 0-.8.6-1.4t1.3-.5 1.3.6.5 1.3q0 .4-.1.7 2.4.4 4.2 1.6t2.9 3.1l8.1-7.1q.2-.1.5-.1t.4.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBellSlash;
