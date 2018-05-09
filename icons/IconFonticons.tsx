
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

class IconFonticons extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--fonticons ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M3 2.9h34.3v34.2H3V2.9zM23.3 10l-.3.7 1.7 1.9-.7 2.5.5.6 2.4-1.3 2.4 1.3.6-.6-.7-2.5 1.7-1.9-.3-.7h-2.1l-1.2-2.1h-.7L25.4 10h-2.1zm-6 3.6q.7 0 1 .4t.3 1.4l3.8-.5q0-1.2-.3-2t-1.2-1.3-1.5-.6-1.9-.1q-3 0-4.5 1.3t-1.4 4.1v1.6H9.4v2.8h1.7q.5 0 .5.2v8.5q0 .3-.1.5t-.4.1l-1.7.2v1.9h10v-1.9l-3.3-.3h-.2q-.1 0-.1-.1t0-.1 0-.1.1-.2v-8.7h4.2l.9-2.8h-5.2q-.1 0 0-.2t.1-.2v-2.7q0-.3.2-.6t.4-.4.8-.2zm13.6 18.5v-1.9l-1.2-.2h-.3q-.1 0 0-.1t0-.2 0-.2V17.9h-6.1l-.5 2.2 1.8.5q.5.2.5.6v8.3q0 .3-.1.4t-.4.1l-1.6.2v1.9h7.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFonticons;
