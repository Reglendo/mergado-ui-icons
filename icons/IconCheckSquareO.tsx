
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

class IconCheckSquareO extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--check-square-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M32.9 20.8v7.1q0 2.6-1.9 4.5t-4.5 1.9H7.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6.5.3.2.4.5.1.4-.2.7l-1.1 1.1q-.2.2-.5.2-.1 0-.2-.1-.5-.1-1-.1H7.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-5.7q0-.3.2-.5l1.4-1.4q.2-.3.5-.3.1 0 .3.1.4.2.4.7zm5.2-11L19.9 28q-.5.6-1.3.6t-1.2-.6l-9.6-9.6q-.6-.5-.6-1.3t.6-1.2l2.4-2.5q.6-.5 1.3-.5t1.3.5l5.8 5.9L33.1 4.8q.5-.5 1.3-.5t1.2.5l2.5 2.5q.5.5.5 1.3t-.5 1.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCheckSquareO;
