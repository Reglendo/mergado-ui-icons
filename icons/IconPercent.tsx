
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

class IconPercent extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--percent ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31.6 28.6q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .8 2-.8.9-2zM14.4 11.4q0-1.1-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zm22.9 17.2q0 3.5-2.5 6t-6.1 2.5-6-2.5-2.6-6 2.6-6.1 6-2.5 6.1 2.5 2.5 6.1zM35.1 4.3q0 .4-.2.8L11.3 36.6q-.4.5-1.2.5H6.6q-.6 0-1-.4t-.5-1q0-.4.3-.8L29 3.4q.4-.5 1.1-.5h3.6q.6 0 1 .4t.4 1zm-15 7.1q0 3.6-2.5 6.1t-6 2.5-6.1-2.5T3 11.4t2.5-6 6.1-2.5 6 2.5 2.5 6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPercent;
