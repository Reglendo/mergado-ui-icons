
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

class IconDashboard extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--dashboard ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M8.6 25.7q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .9 2-.9.9-2zm4.3-10q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm9.5 10.7l2.3-8.5q.1-.6-.2-1.1t-.9-.6-1 .1-.7.9l-2.3 8.5q-1.3.1-2.3 1t-1.5 2.2q-.4 1.7.5 3.3t2.6 2 3.3-.5 2-2.6q.3-1.3-.2-2.6t-1.6-2zm14.7-.7q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zM22.9 11.4q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm10 4.3q0-1.2-.9-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.9-2zm7.1 10q0 5.8-3.1 10.8-.5.6-1.3.6H4.4q-.8 0-1.3-.6Q0 31.6 0 25.7q0-4 1.6-7.8t4.2-6.3 6.4-4.3T20 5.7t7.8 1.6 6.4 4.3 4.2 6.3 1.6 7.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDashboard;
