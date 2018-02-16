
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

class IconTint extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--tint ${p.addClass} ${p.className}`
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
                        <g><path d="M19.9 25.7q0-.8-.4-1.5l-.4-.5q-.4-.5-.5-.9t-.6-1-.5-1.1q0-.3-.4-.3t-.5.3q-.2.5-.5 1.1t-.5 1-.6.9-.3.5q-.5.7-.5 1.5 0 1.2.9 2t2 .9 2-.9.8-2zm11.5-2.8q0 4.7-3.4 8t-8.1 3.4-8.1-3.4-3.3-8q0-3.3 1.8-6.2.1-.2 1.4-2t2.3-3.4 2.2-3.9T18 2.9q.2-.7.8-1.1t1.1-.4 1.2.4.7 1.1q.7 2 1.9 4.5t2.2 3.9 2.3 3.4 1.3 2q1.9 2.9 1.9 6.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTint;
