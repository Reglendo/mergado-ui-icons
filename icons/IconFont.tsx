
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

class IconFont extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--font ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M17.7 12.5l-3.8 10q.7 0 3 .1t3.6 0h1.3q-2-5.7-4.1-10.1zM1.5 37.1v-1.7q.6-.2 1.3-.3t1.3-.2 1.1-.4 1-.6.7-1.1L12.1 19l6.3-16.1h2.9q.1.3.2.4L26.1 14q.7 1.8 2.3 5.8t2.6 6.1q.3.8 1.3 3.2t1.6 3.8q.4 1 .8 1.3.4.3 1.9.6t1.9.5q.1.8.1 1.3v.5q-1.4 0-4.2-.1t-4.3-.2q-1.7 0-4.8.1t-4 .2q0-.9.1-1.7l3-.6.2-.1q.2-.1.4-.1t.3-.1.3-.1.3-.2.2-.3 0-.3q0-.3-.6-2.1t-1.7-4-.9-2.2l-10-.1q-.6 1.3-1.7 4.4T10 33.2q0 .5.3.9t1 .5 1.1.3 1.3.2.9.1v1.9q-1.3 0-3.9-.2t-3.9-.3q-.2 0-.6.1t-.5.1q-1.8.3-4.2.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFont;
