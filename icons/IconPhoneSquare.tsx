
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

class IconPhoneSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--phone-square ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31.6 26.6q0-.2-.1-.3 0-.2-.8-.7t-2-1.1l-1.2-.6q-.1-.1-.4-.3t-.6-.4-.4-.1q-.4 0-1.1.7t-1.3 1.5-.9.7h-.4q-.2 0-.4-.2t-.3-.2-.4-.2q-2.2-1.2-3.8-2.8t-2.8-3.8q0-.1-.2-.3t-.2-.4-.1-.3-.1-.4q0-.3.4-.8t1.1-.8 1-.9.4-.8q0-.2-.1-.5t-.3-.5-.3-.5q-.1-.1-.4-.6t-.5-1-.6-1.1-.6-.9-.3-.4-.4 0q-1.1 0-2.2.5-1.1.4-1.8 2.1t-.8 2.9q0 .3.1.7t.1.7.2.8.2.6.3.8.2.6q1.4 3.7 4.9 7.2t7.1 4.8q.2.1.7.3t.7.2.7.3.7.2.7.1.8 0q1.2 0 2.9-.7t2.1-1.8q.5-1.2.5-2.3zm5.7-17.3v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPhoneSquare;
