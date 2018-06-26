
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

class IconMercury extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--mercury ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M25.5 7.1q3.3 1.6 5.2 4.7t2 6.8q0 4.9-3.3 8.6t-8.1 4.1v3h2.1q.3 0 .5.2t.2.5v1.4q0 .3-.2.5t-.5.2h-2.1v2.2q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-2.2h-2.1q-.3 0-.5-.2t-.2-.5V35q0-.3.2-.5t.5-.2h2.1v-3q-4.8-.5-8.1-4.1T7 18.6q0-3.8 2-6.8t5.2-4.7Q10.5 4.9 9.1 1 9 .6 9.2.3t.6-.3h1.5q.5 0 .7.4.9 2.4 3.1 3.9t4.8 1.4 4.7-1.4T27.8.4q.1-.4.8-.4h1.3q.4 0 .6.3t.1.7q-1.4 3.9-5.1 6.1zm-5.6 21.5q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMercury;
