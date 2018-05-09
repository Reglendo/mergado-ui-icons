
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

class IconTry extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--try ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M32.7 18.6q0 4.2-2.1 7.8t-5.7 5.8-7.9 2.1h-3.6q-.3 0-.5-.2t-.2-.5V19.9l-4.8 1.5h-.2q-.2 0-.4-.1-.3-.2-.3-.6v-2.8q0-.6.5-.7l5.2-1.6v-2.1L7.9 15h-.2q-.2 0-.4-.1-.3-.3-.3-.6v-2.9q0-.5.5-.7l5.2-1.6V3.6q0-.3.2-.5t.5-.2H17q.3 0 .5.2t.2.5v4L26.1 5q.3-.1.6.1t.3.6v2.9q0 .5-.5.7L17.7 12v2l8.4-2.6q.3-.1.6.2t.3.5V15q0 .5-.5.7l-8.8 2.7v10.9q4.2-.3 7.1-3.4t2.9-7.3q0-.3.2-.5t.5-.2H32q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTry;
