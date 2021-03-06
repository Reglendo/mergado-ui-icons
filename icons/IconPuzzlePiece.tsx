
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconPuzzlePiece extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--puzzle-piece ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M38.6 24.5q0 1.8-1 3t-2.7 1.2q-.9 0-1.7-.4t-1.4-.8-1.2-.9-1.6-.3q-2.5 0-2.5 2.7 0 .9.4 2.6t.3 2.6v.1h-.7q-.8.1-2.2.2t-2.6.3-2.1.2q-1.4 0-2.3-.6t-1-1.9q0-.8.4-1.6t.9-1.2.8-1.4.4-1.7q0-1.8-1.2-2.8t-3-.9q-1.9 0-3.2 1t-1.3 2.8q0 1 .3 1.9t.8 1.4.7 1.2.3 1.1q0 1-1 2-.8.8-2.6.8-2.1 0-5.5-.5-.2-.1-.6-.1t-.6-.1l-.3-.1h-.1V11.4l.4.1q.4.1.7.1t.5.1q3.4.5 5.5.5 1.8 0 2.6-.7 1-1 1-2 0-.5-.3-1.2t-.7-1.1-.8-1.5-.3-1.8q0-1.9 1.3-2.9t3.2-1q1.8 0 3 1t1.2 2.8q0 .9-.4 1.7t-.8 1.3-.9 1.3-.4 1.5q0 1.3 1 1.9t2.3.6q1.4 0 4-.3t3.6-.4q0 .1-.1.4t-.1.8-.1.5q-.5 3.3-.5 5.4 0 1.8.8 2.6 1 1.1 2 1.1.5 0 1.1-.4t1.2-.7 1.4-.8 1.9-.3q1.8 0 2.8 1.3t1 3.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPuzzlePiece;
