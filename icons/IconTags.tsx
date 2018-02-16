
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

class IconTags extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--tags ${p.addClass} ${p.className}`
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
                        <g><path d="M9.5 10.5q0-1.2-.8-1.9t-1.9-.8-1.9.8-.8 1.9.8 1.9 1.9.8 1.9-.8.8-1.9zm22.7 12.2q0 1.1-.8 1.9L21 35.1q-.8.8-2 .8-1.1 0-1.9-.8L1.9 19.9q-.8-.8-1.3-2.2T0 15.2V6.4q0-1.1.8-1.9t1.9-.8h8.9q1.1 0 2.5.5t2.1 1.4l15.2 15.2q.8.8.8 1.9zm8.2 0q0 1.1-.8 1.9L29.1 35.1q-.8.8-1.9.8-.8 0-1.2-.3t-1.2-1l10-10q.8-.8.8-1.9 0-1.1-.8-1.9L19.6 5.6q-.8-.8-2.1-1.4T15 3.7h4.7q1.2 0 2.5.5t2.2 1.4l15.2 15.2q.8.8.8 1.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTags;
