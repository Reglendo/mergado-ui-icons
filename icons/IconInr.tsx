
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

class IconInr extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--inr ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30 10.5v2.3q0 .3-.2.5t-.5.2h-3.7q-.5 3.2-2.9 5.2t-6.2 2.5q3.8 3.9 10.3 11.9.3.4.1.8-.2.4-.7.4h-4.3q-.4 0-.6-.3-6.8-8.2-11.1-12.7-.2-.2-.2-.5v-2.9q0-.2.2-.5t.5-.2h2.5q3 0 4.8-.9t2.2-2.8h-9.5q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h9.2q-1.2-2.5-6-2.5h-3.2q-.3 0-.5-.3t-.2-.5V3.6q0-.3.2-.5t.5-.2h18.6q.3 0 .5.2t.2.5v2.2q0 .4-.2.6t-.5.2h-5.2q1 1.3 1.4 3.2h3.8q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconInr;
