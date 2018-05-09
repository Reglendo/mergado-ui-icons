
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

class IconTruck extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--truck ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M13.9 31.2q0-1.2-.8-2t-2-.8-1.9.8-.8 2 .8 1.9 2 .8 1.9-.8.8-2zM5.6 20h8.3v-5.6h-3.4q-.3 0-.5.2l-4.2 4.3q-.2.2-.2.4v.7zm27.8 11.2q0-1.2-.8-2t-1.9-.8-2 .8-.8 2 .8 1.9 2 .8 1.9-.8.8-2zM39 7.5v22.3q0 .3-.1.5t-.3.4-.3.3-.5.1-.5.1-.6 0-.5 0q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9h-8.4q0 2.3-1.6 3.9t-3.9 1.6-4-1.6-1.6-3.9H3.1q-.2 0-.5-.1t-.5-.1-.3-.3-.3-.4-.1-.5q0-.6.4-1t1-.4v-9.3q0-.5.2-.9t.3-.6.5-.7l4.3-4.3q.4-.4 1.1-.7t1.3-.3h3.4V7.5q0-.6.5-1t.9-.4h22.3q.6 0 1 .4t.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTruck;
