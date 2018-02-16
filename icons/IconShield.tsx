
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

class IconShield extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--shield ${p.addClass} ${p.className}`
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
                        <g><path d="M29.8 21.4V7.1h-10v25.4q2.6-1.4 4.7-3 5.3-4.1 5.3-8.1zm4.3-17.1v17.1q0 2-.8 3.8t-1.8 3.4-2.7 2.8-2.8 2.3-2.7 1.8-2 1.1-.9.4q-.3.1-.6.1t-.6-.1q-.4-.2-.9-.4t-2-1.1-2.7-1.8-2.9-2.3-2.6-2.8-1.9-3.4-.7-3.8V4.3q0-.6.4-1t1-.4h25.7q.6 0 1 .4t.5 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShield;
