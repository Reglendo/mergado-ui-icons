
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconEur extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--eur ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M30.3 29.2l.8 3.5q0 .3-.1.5t-.4.3l-.1.1h-.2q-.1 0-.4.1t-.5.2-.5.1-.7.1-.7.1-.9.1-.8 0q-5.2 0-9.2-2.9t-5.3-7.9H9.2q-.3 0-.5-.2t-.2-.5v-2.5q0-.3.2-.5t.5-.2h1.5q-.1-1.3 0-2.4H9.2q-.3 0-.5-.2t-.2-.5V14q0-.3.2-.5t.5-.2h2.2q1.5-4.7 5.4-7.6t9-2.8q2.3 0 4.3.5.3 0 .5.3.1.3 0 .5l-.9 3.6q-.1.3-.4.4t-.5.1h-.1q-.1-.1-.2-.1l-.4-.1-.5-.1H27l-.7-.1h-.6q-2.8 0-5.1 1.4t-3.3 4h10.4q.4 0 .6.2.2.3.2.6l-.6 2.6q-.1.5-.7.5H16.3q-.1.9 0 2.4h10.3q.3 0 .5.2.2.3.1.6l-.5 2.5q0 .3-.2.5t-.5.1h-8.6q1.1 2.6 3.3 4.2t5.1 1.5h.8q.4 0 .8-.1t.6-.1.6-.1.4-.1l.3-.1h.1q.3-.1.5 0 .3.2.4.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconEur;
