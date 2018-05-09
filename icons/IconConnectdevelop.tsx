
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

class IconConnectdevelop extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--connectdevelop ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.8 20q0 .4-.3.7t-.6.4l-4 6.9v.3q0 .4-.2.7t-.6.4l-3.8 6.5q.1.2.1.3 0 .5-.3.8t-.8.4q-.5 0-.8-.4h-7.8q-.3.4-.8.4T19 37h-7.7q-.3.4-.8.4t-.8-.3-.3-.8v-.4l-3.7-6.5q-.4-.1-.6-.4t-.3-.7q0-.1.1-.3l-4-6.9q-.4-.1-.7-.4T0 20q0-.4.3-.7t.6-.4l3.9-6.7v-.1q0-.7.6-1l4.1-7q-.1-.2-.1-.4 0-.5.3-.8t.8-.3q.5 0 .9.4H19q.4-.4.9-.4t.8.4h7.7q.4-.4.9-.4.4 0 .8.3t.3.8q0 .1-.1.4l4 6.9q.5 0 .8.4t.3.7q0 .3-.1.5l3.6 6.3q.4.1.6.4t.3.7zM20.6 35.5h7.6l-6.7-6.9h-2.7l-6.7 6.9h7q.4-.3.8-.3t.7.3zM2.2 19.7v.6l4 7h.2l.1.1 3.6-3.9v-6.7L6.5 13q-.2.2-.6.2zM19.1 4.5h-7.5l3.7 3.9L26 4.5h-5.4q-.3.3-.7.3t-.8-.3zM32.8 28q0-.1.1-.2l-1.3-1.3-.3 1.5h1.5zm-2.1 0l.5-2-4.9-5.2-5.8 6 1.2 1.2h9zM29 35.2l.3-.6 1.3-6h-8.3l6.5 6.7q.1-.1.2-.1zm-17.8.3h.1l6.7-6.9h-7.3v6.5l.1.1q.3.1.4.3zm-.5-7.5h7.8l1.3-1.2-6-6.3-3.1 3.2V28zM7 28h3.1v-3.6l-3.2 3.4q0 .2.1.2zm0-16v.1q0 .1 0 0 0 .3-.2.6l3.3 3.4v-5.2zm3.7-1.3v6l3 3 5.7-6-4.3-4.6zm.1-5.9l-.1.1V10l4-1.4L11 4.7q-.1 0-.2.1zm17.3-.3h-.3L15.7 8.9l4.2 4.3zm-8.2 9.6l-5.8 6.1 6 6.2 5.8-6zm-6.5 6l-2.7-2.7v5.5zm6.7 7.1l-.8.8H21zm6.6-6.8l4.6 4.9 2.6-12.1-.1-.1zm6.6-7.7q-.1-.3-.1-.6L29 4.8q-.1-.1-.3-.1l-8.4 9 6 6.3zm-23.2-2.4V5.9L7 11.4zm0 18.3H7l3.1 5.5v-5.5zm21.1 0l-.9 4.4 2.5-4.4h-1.6zm2.4-1.3l4-7q-.1-.2-.1-.3l.1-.3-3.3-5.8-2.5 11.9 1.5 1.6q.1-.1.3-.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconConnectdevelop;
