
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

class IconVolumeControlPhone extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--volume-control-phone ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M18.3 37.7q0-.2-.3-1.3t-.7-2.4-.5-1.5q0-.1-.1-.6t-.2-.8-.3-.5q-.3-.3-1.1-.3-.5 0-1.6.1t-1.5.1q-.8 0-1.1-.2-.1-.1-.2-.4t-.2-.4-.2-.5-.1-.5q-.8-2.8-.8-5.6t.8-5.7q.1-.1.1-.4t.2-.6.2-.4.2-.4q.3-.2 1.1-.2.5 0 1.5.1t1.6.1q.8 0 1.1-.3.2-.2.3-.5t.2-.8.1-.6q.1-.2.5-1.5t.7-2.4.3-1.3q0-.5-1-1.2t-1.7-.9q-.4-.2-1-.2-.7 0-2.2.4-1.2.4-2.1.9T8.7 8.5t-1 1.6-1.1 2.1l-.2.4Q5.3 15 4.9 17.4t-.4 5.5.4 5.4 1.5 4.8q1.3 2.7 1.9 3.6 1.4 2 4 2.8l.1.1q1.5.4 2.2.4.6 0 1-.2.7-.3 1.7-.9t1-1.2zm3.5-20.4q-.6 0-1-.4t-.4-1 .4-1q.8-.9.8-2 0-1.2-.8-2.1-.4-.4-.4-1t.4-1 1-.4 1 .4q1.7 1.7 1.7 4.1t-1.7 4q-.4.4-1 .4zm4.1 4.1q-.6 0-1-.5-.5-.4-.5-1t.5-1q2.5-2.5 2.5-6t-2.5-6.1q-.5-.4-.5-1t.5-1 1-.4 1 .4q3.3 3.3 3.3 8.1t-3.3 8q-.4.5-1 .5zm4 4q-.6 0-1-.4t-.4-1 .4-1q2-2.1 3.1-4.7t1.1-5.4T32 7.4t-3.1-4.7q-.4-.4-.4-1t.4-1 1-.4 1 .4q2.4 2.5 3.7 5.6t1.3 6.6-1.3 6.5-3.7 5.6q-.4.4-1 .4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconVolumeControlPhone;
