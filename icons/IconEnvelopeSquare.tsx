
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

class IconEnvelopeSquare extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--envelope-square ${p.addClass} ${p.className}`
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
                        <g><path d="M30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5zm.7 23.5v-9.7q-.7.8-1.5 1.2-.7.5-2.9 1.9T23.8 22q-2.2 1.6-3.7 1.6-1.4 0-3.6-1.6-1-.7-3.2-2t-3.2-2.1q-.2-.2-.7-.6t-.7-.6v9.7q0 .9.6 1.5t1.6.7h18.5q.9 0 1.5-.7t.7-1.5zm0-12.8q0-.9-.6-1.5t-1.6-.7H10.9q-.9 0-1.6.7t-.6 1.5q0 .8.7 1.7t1.5 1.4q1.1.7 3.1 2t2.9 1.9l.3.2.5.3.5.3.5.3.5.2.5.2h.9l.5-.2.5-.2.5-.3.5-.3.4-.3.4-.2 6-3.9q.8-.5 1.5-1.4t.7-1.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconEnvelopeSquare;
