
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

class IconXingSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--xing-square ${p.addClass} ${p.className}`
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
                        <g><path d="M18.3 17.1l-2.8-5q-.5-.7-1.2-.7h-4.1q-.4 0-.6.2-.1.3 0 .7l2.8 4.8-4.3 7.7q-.2.3 0 .6.1.3.5.3h4.1q.7 0 1.1-.8zM32.2 6q-.1-.3-.5-.3h-4.2q-.7 0-1.1.8l-9.2 16.3q.1 0 5.9 10.7.4.8 1.2.8h4.1q.4 0 .5-.3.2-.3 0-.6l-5.8-10.6v-.1l9.1-16.1q.2-.4 0-.6zm5.1 3.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconXingSquare;
