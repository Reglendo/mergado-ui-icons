
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

class IconLineChart extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--line-chart ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.8 32.4v2.5H0V5.1h2.5v27.3h37.3zM37.3 8.2v8.4q0 .5-.4.6t-.7-.1l-2.3-2.4L21.6 27q-.2.2-.5.2t-.4-.2l-4.5-4.5-8.1 8.1-3.8-3.8 11.4-11.3q.2-.2.4-.2t.5.2l4.5 4.5 9-9-2.3-2.4q-.3-.3-.2-.6t.6-.4h8.4q.3 0 .5.2t.2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLineChart;
