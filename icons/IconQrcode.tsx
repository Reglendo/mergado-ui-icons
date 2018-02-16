
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconQrcode extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--qrcode ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M13.1 25.7v2.9h-2.9v-2.9h2.9zm0-17.1v2.8h-2.9V8.6h2.9zm17.1 0v2.8h-2.8V8.6h2.8zM7.4 31.4h8.5v-8.5H7.4v8.5zm0-17.1h8.5V5.7H7.4v8.6zm17.1 0h8.6V5.7h-8.6v8.6zM18.8 20v14.3H4.5V20h14.3zm11.4 11.4v2.9h-2.8v-2.9h2.8zm5.7 0v2.9h-2.8v-2.9h2.8zm0-11.4v8.6h-8.5v-2.9h-2.9v8.6h-2.9V20h8.6v2.9h2.9V20h2.8zM18.8 2.9v14.2H4.5V2.9h14.3zm17.1 0v14.2H21.6V2.9h14.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQrcode;
