
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

class IconCommentO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--comment-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20 8.6q-4.6 0-8.5 1.5t-6.3 4.2T2.9 20q0 2.5 1.6 4.8t4.4 3.9l2 1.1-.6 2.1q-.5 2.1-1.6 3.9 3.4-1.4 6.2-3.8l.9-.9 1.3.2q1.5.1 2.9.1 4.6 0 8.5-1.5t6.3-4.2 2.3-5.7-2.3-5.7-6.3-4.2T20 8.6zM40 20q0 3.9-2.7 7.2T30 32.4t-10 1.9q-1.6 0-3.2-.2-4.5 3.9-10.3 5.4-1.1.3-2.6.5h-.1q-.3 0-.6-.2t-.3-.6v-.1q-.1-.1 0-.2t0-.3.1-.2l.1-.2.2-.2.2-.2.7-.7q.6-.6.7-.9t.7-.9.8-1.1.6-1.3.5-1.7Q4 29.2 2 26.3T0 20q0-3.9 2.7-7.2T10 7.6t10-1.9 10 1.9 7.3 5.2T40 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCommentO;
