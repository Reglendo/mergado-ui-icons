
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconLightbulbO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--lightbulb-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M24.9 12.9q0 .2-.2.5t-.5.2-.5-.2-.2-.5q0-1.1-1.2-1.6t-2.4-.6q-.3 0-.5-.2t-.2-.5.2-.5.5-.2q1.1 0 2.2.3t2 1.2.8 2.1zm3.6 0q0-1.6-.8-3t-2-2.3T23 6.2t-3.1-.5-3 .5-2.8 1.4-2 2.3-.7 3q0 2.2 1.5 4l.7.7q.5.5.6.7 2.9 3.5 3.2 6.7h5.1q.3-3.2 3.1-6.6.2-.3.7-.8t.7-.7q1.5-1.8 1.5-4zm2.9 0q0 3.4-2.3 5.9-1 1.1-1.7 2t-1.3 2.1-.8 2.4q1.1.6 1.1 1.8 0 .9-.6 1.5.6.6.6 1.4 0 1.2-1 1.8.2.5.2 1.1 0 1-.7 1.5t-1.7.6q-.4 1-1.3 1.6t-2 .5-1.9-.5-1.4-1.6q-1 0-1.7-.6t-.7-1.5q0-.6.3-1.1-1-.6-1-1.8 0-.8.6-1.4-.6-.6-.6-1.5 0-1.2 1.1-1.8-.1-1.1-.8-2.4t-1.3-2.1-1.7-2q-2.3-2.5-2.3-5.9 0-2.3 1-4.2t2.6-3.1 3.7-2 4.1-.7 4.2.7 3.7 2 2.6 3.1 1 4.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLightbulbO;
