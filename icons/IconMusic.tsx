
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

class IconMusic extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--music ${p.addClass} ${p.className}`
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
                        <g><path d="M37.3 5v25q0 1.1-.8 2t-1.9 1.3-2.3.8-2.2.2-2.1-.2-2.3-.8-1.9-1.3-.8-2 .8-2 1.9-1.3 2.3-.8 2.1-.2q2.4 0 4.3.9v-12l-17.1 5.3v15.8q0 1.1-.8 2t-1.9 1.4-2.3.7-2.2.2-2.1-.2-2.3-.7-1.9-1.4-.8-2 .8-2 1.9-1.3 2.3-.7 2.1-.3q2.4 0 4.3.9V10.7q0-.7.5-1.2t1-.8L34.5 3q.3-.1.6-.1.9 0 1.6.6t.6 1.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMusic;
