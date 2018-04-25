
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconQuestion extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--question ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M23.2 28v5.4q0 .4-.3.6t-.6.3H17q-.4 0-.7-.3t-.2-.6V28q0-.3.2-.6t.7-.3h5.3q.4 0 .6.3t.3.6zm7.1-13.4q0 1.2-.4 2.3t-.8 1.7-1.2 1.3-1.3 1-1.3.8q-.9.5-1.6 1.4t-.6 1.5q0 .4-.2.8t-.7.3h-5.3q-.4 0-.6-.4t-.2-.8v-1q0-1.9 1.4-3.5t3.2-2.5q1.3-.6 1.9-1.2t.5-1.7q0-.9-1-1.7t-2.4-.7q-1.4 0-2.4.7-.8.5-2.4 2.5-.3.4-.7.4-.2 0-.5-.2L10 12.8q-.3-.2-.3-.5t.1-.6q3.5-6 10.3-6 1.8 0 3.6.7T27 8.3t2.4 2.8.9 3.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQuestion;
