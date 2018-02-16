
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

class IconStackOverflow extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--stack-overflow ${p.addClass} ${p.className}`
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
                        <g><path d="M31.8 36.4h-25V25.7H3.2V40h32.1V25.7h-3.5v10.7zM10.7 24.7l.8-3.5L29 24.9l-.8 3.5zm2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2zm4.5-8l2.3-2.7 13.7 11.4-2.3 2.8zM26.4 0L37 14.3l-2.8 2.2L23.5 2.1zm-16 32.8v-3.5h17.8v3.5H10.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconStackOverflow;
