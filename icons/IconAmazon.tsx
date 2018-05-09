
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

class IconAmazon extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--amazon ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.6 32.9q.4-.1.6 0t.2.4-.3.7q-.3.4-1 1T32 36.5t-3.1 1.7-4.2 1.3-5.2.5q-2.6 0-5.3-.7t-4.6-1.7-3.9-2.3-3-2.4T.9 31q-.2-.2-.3-.4t.1-.3.2-.1.2-.1.3.1q4.3 2.7 6.7 3.8 8.6 3.9 17.8 2 4.2-.9 8.7-3.1zm4.6-2.5q.3.3.1 1.5t-.6 2.3q-.8 1.9-1.9 2.8-.4.3-.6.2t0-.5q.5-1.1 1-2.8t.1-2.2q-.1-.1-.3-.2t-.6-.2-.7 0-.8 0-.7 0-.7.1-.5 0q-.1.1-.3.1t-.2 0-.2 0-.1 0h-.4v-.1q-.1-.3 1-.9t2.3-.6q1.1-.2 2.4-.1t1.7.6zm-8.8-9.9q0 .7.3 1.4t.8 1.3.8 1 .7.8l.3.2-5 5q-.9-.8-1.8-1.7t-1.3-1.3l-.4-.4q-.3-.3-.6-.8-.8 1.3-2.2 2.3t-2.8 1.4-3.1.5-3.1-.4-2.6-1.5-1.9-2.5-.7-3.6q0-1.9.7-3.5t1.6-2.6 2.3-1.8 2.8-1.3 2.9-.8 2.6-.4 2.3-.1V8.8q0-1.4-.5-2.1-.8-1.2-2.7-1.2h-.4q-.3 0-.9.3t-1.2.6T16 7.8t-1 2.1l-6.6-.6q0-1.3.5-2.6t1.5-2.6T12.8 2 16.2.5t4.2-.5q2.3 0 4.1.6t2.9 1.3 1.8 1.9 1 1.9.2 1.6v13.2zm-15 .5q0 1.9 1.6 2.9 1.5 1 3.1.5 1.9-.5 2.6-2.7.3-1 .3-2.3v-3.6q-1.3 0-2.5.3t-2.4.7-1.9 1.6-.8 2.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAmazon;
