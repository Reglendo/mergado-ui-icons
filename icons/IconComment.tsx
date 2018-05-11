
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

class IconComment extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--comment ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M40 20q0 3.9-2.7 7.2T30 32.4t-10 1.9q-1.6 0-3.2-.2-4.5 3.9-10.3 5.4-1.1.3-2.6.5-.3 0-.6-.2t-.4-.6v-.1q-.1-.1 0-.2t0-.3.1-.2l.1-.2.2-.2.2-.2.7-.7q.6-.6.7-.9t.7-.9.8-1.1.6-1.3.5-1.7Q4 29.2 2 26.3T0 20q0-2.9 1.6-5.5t4.2-4.6 6.4-3.1T20 5.7q5.4 0 10 1.9t7.3 5.2T40 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconComment;
