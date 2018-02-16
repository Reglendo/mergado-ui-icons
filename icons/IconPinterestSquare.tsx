
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

class IconPinterestSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--pinterest-square ${p.addClass} ${p.className}`
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
                        <g><path d="M30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H14.7q1.9-2.7 2.4-4.6.2-.8 1.2-4.7.4.9 1.6 1.5t2.5.6q4.1 0 6.6-3.3t2.6-8.3q0-1.9-.8-3.6t-2.2-3.1-3.4-2.2-4.4-.8q-2.3 0-4.3.6t-3.4 1.7-2.4 2.5-1.5 2.8-.5 3q0 2.3.9 4t2.6 2.4q.3.2.5 0t.3-.4q.3-1 .4-1.3.1-.5-.3-1-1.1-1.4-1.1-3.3 0-3.4 2.3-5.8t6.1-2.3q3.3 0 5.2 1.8t1.8 4.7q0 3.7-1.5 6.4T22 27q-1.3 0-2.1-1t-.5-2.3q.1-.8.6-2.1t.6-2.2.3-1.7q0-1.1-.6-1.8t-1.7-.7q-1.4 0-2.3 1.2t-1 3.1q0 1.6.6 2.7l-2.2 9.3q-.6 2.2-.2 5.6H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPinterestSquare;
