
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

class IconBehanceSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--behance-square ${p.addClass} ${p.className}`
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
                        <g><path d="M30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5zM14.1 11H5.9v17.6h8.5q2.6 0 4.4-1.3t1.8-3.8q0-3.5-3.2-4.4 2.4-1.2 2.4-3.7 0-1.3-.5-2.2t-1.2-1.3-1.8-.7-2.2-.2zm-.5 7.1H9.7V14h3.7q2.6 0 2.6 2 0 2.1-2.4 2.1zm.2 7.5H9.7v-4.8h4.2q2.8 0 2.8 2.5 0 2.3-2.9 2.3zm14.6.7q-1.6 0-2.4-.8t-.8-2.4h9.2v-.7q0-2.9-1.6-4.9t-4.6-2q-2.8 0-4.7 2t-1.8 4.8q0 3 1.8 4.8t4.7 1.8q4.6 0 6-4.2h-3.1q-.2.7-1.1 1.2t-1.6.4zm-.3-8.1q2.6 0 2.8 2.7h-5.7q.1-1.3.9-2t2-.7zm-3.6-6h7.1V14h-7.1v-1.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBehanceSquare;
