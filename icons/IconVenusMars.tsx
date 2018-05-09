
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

class IconVenusMars extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--venus-mars ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M33 2.9q0-.3.2-.5t.5-.2h5.7q.5 0 .9.4t.3.9v5.7q0 .3-.1.5t-.5.1h-1.3q-.2 0-.4-.1t-.2-.5V6.5l-5 5.1q1.5 1.9 2.1 4.3t.2 4.9q-.7 3.5-3.3 6.1T25.9 30q-4.4.7-8.1-1.8-2.3 1.6-5.1 1.9v2.6h1.9q.3 0 .5.2t.1.4v1.3q0 .3-.1.5t-.5.1h-1.9v1.9q0 .3-.2.5t-.4.2h-1.3q-.3 0-.5-.2t-.1-.5v-1.9H8.3q-.3 0-.5-.1t-.2-.5v-1.3q0-.2.2-.4t.5-.2h1.9v-2.6q-3.1-.4-5.6-2.2T.9 23.2t-.8-6.1q.5-3.7 3.2-6.4t6.3-3.3q4.5-.6 8.2 1.8 2.9-1.9 6.3-1.9 4 0 7.1 2.5l5.1-5h-2.7q-.2 0-.4-.2t-.2-.5V2.9zm-15.2 22q2.5-2.6 2.5-6.2t-2.5-6.2q-2.6 2.6-2.6 6.2t2.6 6.2zM2.5 18.7q0 3.7 2.6 6.3t6.3 2.6q2.4 0 4.4-1.1-3.1-3.3-3.1-7.8t3.1-7.7q-2-1.2-4.4-1.2-3.6 0-6.3 2.6t-2.6 6.3zm21.6 8.9q3.7 0 6.3-2.6t2.6-6.3-2.6-6.2-6.3-2.7q-2.3 0-4.3 1.2 3.1 3.3 3.1 7.7t-3.1 7.8q2 1.1 4.3 1.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconVenusMars;
