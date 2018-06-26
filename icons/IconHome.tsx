
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

class IconHome extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--home ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M32.9 22.1v10.8q0 .5-.4 1t-1 .4h-8.6v-8.6h-5.7v8.6H8.6q-.5 0-1-.4t-.4-1V22l12.9-10.6L32.9 22v.1zm5-1.5l-1.4 1.7q-.2.2-.4.2H36q-.3 0-.5-.2L20.1 9.5 4.6 22.3q-.2.2-.5.2t-.5-.2l-1.4-1.7q-.1-.2-.1-.5t.2-.5L18.4 6.2q.7-.6 1.7-.6t1.7.6l5.4 4.6V6.4q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v9.1l4.9 4.1q.2.2.3.5t-.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHome;
