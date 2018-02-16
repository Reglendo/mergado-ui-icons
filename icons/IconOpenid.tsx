
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

class IconOpenid extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--openid ${p.addClass} ${p.className}`
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
                        <g><path d="M24.2 0v34.3l-6 2.8q-5.1-.4-9.3-2.2t-6.5-4.7T0 24.1q0-3.1 2.2-5.9t6.2-4.5 8.7-2.4v3.8q-4.8.8-7.9 3.3T6 24.1q0 3.4 3.5 6t8.7 3.2V3zm15 13l.8 8.7-11.7-2.6 3.3-1.8q-2.7-1.6-6.3-2.2v-3.9q6.2.8 10.7 3.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconOpenid;
