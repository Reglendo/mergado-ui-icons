
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

class IconGooglePlusSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--google-plus-square ${p.addClass} ${p.className}`
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
                        <g><path d="M23.5 20.2q0-.6-.2-1.4h-8v2.9h4.8q-.1.6-.4 1.1t-.8 1.2-1.5 1-2.1.4q-2.3 0-3.8-1.6T9.9 20t1.6-3.8 3.8-1.6q2 0 3.4 1.3l2.3-2.2q-2.4-2.3-5.7-2.3-3.6 0-6.1 2.5T6.7 20t2.5 6.1 6.1 2.5q3.6 0 5.9-2.4t2.3-6zm7.7 1h2.4v-2.4h-2.4v-2.5h-2.5v2.5h-2.4v2.4h2.4v2.5h2.5v-2.5zm6.1-11.9v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGooglePlusSquare;
