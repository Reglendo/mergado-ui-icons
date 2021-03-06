
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

class IconUniversalAccess extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--universal-access ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30.7 14.7q-.2-.6-.7-.9t-1-.2Q23.1 15 20 15t-8.9-1.4q-.6-.1-1.1.2t-.7.9.2 1 .9.7q4.3 1 6.7 1.3 0 3.5-.3 6t-.6 3.5-.9 2.5l-.2.5q-.2.6 0 1.1t.8.8h.5q1 0 1.4-.9l.1-.4q1.2-3.1 1.6-5.8h1q.3 2.7 1.6 5.8l.1.4q.4.9 1.4.9h.5q.5-.3.8-.8t0-1.1l-.2-.5q-.6-1.6-.9-2.5t-.6-3.5-.3-6q2.4-.3 6.7-1.3.6-.1.9-.7t.2-1zm-7.8-3.3q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zM35.7 20q0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5T4.3 20t1.2-6.1 3.4-5 5-3.4T20 4.3t6.1 1.2 5 3.4 3.4 5 1.2 6.1zM20 2.9q-3.5 0-6.7 1.3T7.9 7.9t-3.7 5.4T2.9 20t1.3 6.7 3.7 5.4 5.4 3.7 6.7 1.3 6.7-1.3 5.4-3.7 3.7-5.4 1.3-6.7-1.3-6.7-3.7-5.4-5.4-3.7T20 2.9zM40 20q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2T20 40t-7.8-1.6-6.4-4.2-4.2-6.4T0 20t1.6-7.8 4.2-6.4 6.4-4.2T20 0t7.8 1.6 6.4 4.2 4.2 6.4T40 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUniversalAccess;
