
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

class IconHandGrabO extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--hand-grab-o ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M20.1 8.6q-1.1 0-2 .8t-.8 2v2.9h-.7v-2.1q0-1.1-.7-1.8t-1.8-.8q-1.1 0-1.8.8t-.7 1.7v9.6l-.7-.7v-3.8q0-1.1-.8-1.8t-1.7-.8q-1.1 0-1.8.8t-.7 1.7v5q0 1.1.7 1.9l7 6.6q.8.8.8 2.3 0 .5.5 1t1 .4h14.2q.6 0 1-.4t.5-1v-.6q0-.9.2-1.7l2.4-9.8q.2-.8.2-1.7v-5.5q0-1-.7-1.8t-1.8-.7q-1 0-1.7.7t-.8 1.8v.7h-.7v-2.8q0-.9-.5-1.6T26.7 9q-.3-.1-.5-.1-1 0-1.8.8t-.7 1.7v2.9H23v-2.7q0-1.2-.7-2t-1.9-1h-.3zm0-2.9q1.9 0 3.4 1.1 1.2-.7 2.7-.7 1.3 0 2.5.6t1.9 1.7q.6-.2 1.3-.2 2.3 0 3.8 1.6t1.6 3.8v5.5q0 1.2-.3 2.4l-2.4 9.8q-.2.5-.2 1.6 0 1.7-1.2 3t-3.1 1.2H15.9q-1.9 0-3.1-1.3t-1.2-3.1L4.7 26Q3 24.4 3 22.1v-5q0-2.2 1.6-3.7t3.8-1.6h.3q.1-2.1 1.7-3.6t3.7-1.4q1.1 0 2.2.5 1.6-1.6 3.8-1.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHandGrabO;
