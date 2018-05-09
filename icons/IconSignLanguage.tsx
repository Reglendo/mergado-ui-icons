
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

class IconSignLanguage extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--sign-language ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20.1 15q.7 0 1.3.4l4.9 3.3q1.4.9 2.5 2.2l3.2 3.8q.9 1 .7 2.4l-1.6 9.2q-.2.7-.7 1.2t-1.2.5l-11.8 1.3-7.8.7h-.2q-.9 0-1.5-.6t-.7-1.5q0-.9.6-1.5t1.5-.7l5.8-.7h-10q-.9 0-1.6-.7t-.6-1.6q.1-.8.7-1.4t1.6-.6H15L3.4 29.3q-.9-.1-1.5-.9t-.4-1.6q.2-.8.8-1.3t1.5-.5H4l10.7 1.4-7.8-2.1q-.9-.3-1.4-1t-.4-1.5q.1-.8.7-1.3t1.4-.5h.5l10 2.2 4.8.8h.1q.1 0 0 0 .6 0 .7-.5t-.3-.8l-4.1-2.8q-.8-.5-.9-1.4t.4-1.6Q19 15 20 15zm-1.6 4.5l4.1 2.8-4.8-.8-.1-.1-.8-.8-5.4-5.8v-.1l-.1-.1q-.5-.7-.4-1.6t.9-1.4q.6-.5 1.5-.4t1.4.8l3.2 3.2-.1.1-.1.1q-.7 1-.5 2.2t1.2 1.9zM38.3 9.4l.3 5.9q.1 1.7-.2 3.3l-1.1 4.9q-.3 1.3-1.5 1.9l-2.4 1.3q.1-1.4-.8-2.5l-3.3-3.8q-1.2-1.3-2.6-2.3l-5-3.3q-.7-.5-1.6-.5-1.2 0-2 .8l-5.3-6.9q-.5-.8-.4-1.7t1-1.4q.7-.5 1.5-.3t1.4.9l6 7.9-5.9-10.2q-.4-.8-.2-1.7T17.3.4Q18 0 18.9.3t1.3 1l5.3 9.4-3-7.6q-.3-.7-.1-1.6t1-1.3q.8-.4 1.7-.1t1.2 1.2l4.3 9.2 2.3 4.4q.2.3.5.4t.6-.2.3-.6l-.3-5q0-.9.6-1.6t1.5-.6q.9 0 1.5.6t.7 1.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSignLanguage;
