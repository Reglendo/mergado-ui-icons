
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

class IconCab extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--cab ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.4 20q1.8 0 3.1 1.3t1.3 3v7.5q0 .3-.2.4t-.5.2h-1.8v1.3q0 1.5-1.1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3H9.9v1.3q0 1.5-1 2.6t-2.7 1.1-2.6-1.1-1.1-2.6v-1.3H.6q-.3 0-.4-.2t-.2-.4v-7.5q0-1.8 1.3-3t3-1.3h.6l2-8.1q.5-1.9 2-3.1t3.5-1.2h2.5V3.2q0-.2.2-.4t.4-.2h8.7q.3 0 .5.2t.1.4v4.4h2.5q1.9 0 3.5 1.2t2 3.1l2.1 8.1h.5zM6.2 29.3q1.3 0 2.2-.9t.9-2.2-.9-2.2-2.2-.9T4 24t-.9 2.2.9 2.2 2.2.9zM10 20h19.7L28 13.1q0-.2-.3-.4t-.4-.2H12.4q-.2 0-.4.2t-.3.4zm23.5 9.3q1.3 0 2.2-.9t.9-2.2-.9-2.2-2.2-.9-2.2.9-.9 2.2.9 2.2 2.2.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCab;
