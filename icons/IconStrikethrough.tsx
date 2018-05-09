
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

class IconStrikethrough extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--strikethrough ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.3 20q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2H.7q-.3 0-.5-.2t-.2-.6v-1.4q0-.3.2-.5t.5-.2h38.6zm-28.5-1.4q-.6-.8-1.2-1.8-1-2.2-1-4.2 0-4.1 3-6.9 2.9-2.8 8.7-2.8 1.2 0 3.8.4 1.4.3 3.9 1.1.2.8.5 2.6.3 2.7.3 4.1 0 .4-.1 1h-.3l-1.9-.1h-.3q-1.1-3.4-2.3-4.6-1.9-2-4.7-2-2.5 0-4 1.3t-1.5 3.2q0 1.7 1.5 3.2t6.2 2.8q1.5.5 3.8 1.5 1.3.6 2.2 1.2H10.8zm11.3 5.7h9.2q.1.9.1 2 0 2.5-.9 4.8-.5 1.2-1.6 2.3-.8.8-2.4 1.8-1.8 1.1-3.4 1.5-1.8.4-4.5.4-2.6 0-4.4-.5l-3.1-.9q-1.3-.3-1.6-.6-.2-.2-.2-.5v-.3q0-2.4-.1-3.5v-1.5l.1-.8v-1h2.3q.3.7.6 1.6t.5 1.2.3.6q.8 1.3 1.8 2.1t2.3 1.3q1.4.5 3 .5 1.4 0 3.1-.6 1.7-.6 2.7-1.9 1.1-1.4 1.1-2.9 0-1.9-1.8-3.5-.8-.7-3.1-1.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconStrikethrough;
