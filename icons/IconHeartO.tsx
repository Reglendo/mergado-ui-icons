
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

class IconHeartO extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--heart-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.1 13.3q0-1.8-.4-3.2t-1.3-2.2-1.8-1.3-2.1-.7-2.2-.2-2.5.6-2.4 1.4-2 1.6-1.3 1.4q-.4.5-1.1.5t-1.1-.5q-.5-.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-.6-2.2.2-2.1.7-1.8 1.3-1.3 2.2-.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8zm2.9 0q0 4.9-5.1 10L21 36.7q-.4.4-1 .4t-1-.4L5.1 23.3l-.6-.6q-.4-.4-1.3-1.4t-1.5-2.2-1.2-2.7-.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8.4t2.7 1.3 2.1 1.6T20 7.7q.8-.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-.4q5 0 7.9 2.7t2.8 7.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHeartO;
