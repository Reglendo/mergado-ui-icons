
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

class IconServer extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--server ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M2.9 31.4h22.8v-2.8H2.9v2.8zm0-11.4h22.8v-2.9H2.9V20zm35 10q0-.9-.7-1.5t-1.5-.6-1.5.6-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zM2.9 8.6h22.8V5.7H2.9v2.9zm35 10q0-.9-.7-1.5t-1.5-.7-1.5.7-.6 1.5.6 1.5 1.5.6 1.5-.6.7-1.5zm0-11.5q0-.8-.7-1.5T35.7 5t-1.5.6-.6 1.5.6 1.6 1.5.6 1.5-.6.7-1.6zM40 25.7v8.6H0v-8.6h40zm0-11.4v8.6H0v-8.6h40zm0-11.4v8.5H0V2.9h40z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconServer;
