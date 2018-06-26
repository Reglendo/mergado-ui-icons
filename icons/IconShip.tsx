
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

class IconShip extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--ship ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.2 32.8q.3-.4.8-.4t.9.4l2.5 2.5-1.8 1.7-1.6-1.6-1.6 1.6q-.3.4-.9.4t-.8-.4l-1.6-1.6-1.7 1.6q-.3.4-.8.4t-.9-.4l-1.6-1.6-1.6 1.6q-.4.4-.9.4t-.9-.4l-1.6-1.6-1.6 1.6q-.4.4-.9.4t-.8-.4l-1.7-1.6-1.6 1.6q-.3.4-.8.4t-.9-.4l-1.6-1.6L9.6 37q-.4.4-.9.4t-.9-.4l-1.6-1.6L4.6 37q-.4.4-.9.4t-.8-.4L.4 34.5l1.7-1.7 1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.3-.4.8-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.9.4l1.6 1.6 1.6-1.6q.4-.4.9-.4t.8.4l1.6 1.6zm-30.6-.7q-.4.3-.9.3t-.8-.3L.4 29.6l1.7-1.8 1.6 1.6 1.6-1.6q.4-.3.9-.3t.9.3l1.6 1.6 1.2-1.2v-5.7l-4-6.1q-.4-.5-.2-1.1t.8-.8l3.4-1.1V7.6h2.5V5.1h5V2.6h5v2.5h4.9v2.5h2.5v5.8l3.4 1.1q.6.2.8.8t-.1 1.1l-4.1 6.1v5.7l.4-.4q.4-.3.9-.3t.8.3l1.6 1.6 1.7-1.6q.3-.3.8-.3t.9.3l2.5 2.5-1.8 1.8-1.6-1.7-1.6 1.7q-.3.3-.9.3t-.8-.3l-1.6-1.7-1.7 1.7q-.3.3-.8.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.8-.3l-1.7-1.7-1.6 1.7q-.3.3-.8.3t-.9-.3l-1.6-1.7-1.6 1.7q-.4.3-.9.3t-.9-.3l-1.6-1.7zm7.8-22v2.4l7.5-2.4 7.4 2.4v-2.4h-2.5V7.6h-9.9v2.5h-2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShip;
