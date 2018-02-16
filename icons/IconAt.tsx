
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

class IconAt extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--at ${p.addClass} ${p.className}`
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
                        <g><path d="M24.7 17.3q0-2.4-1.2-3.8t-3.3-1.3q-1.4 0-2.8.6T15 14.7t-1.8 3.1-.7 4q0 2.5 1.2 3.9t3.4 1.3q2.1 0 3.9-1.5t2.7-3.7 1-4.5zM37.3 20q0 2.5-.8 4.4t-2.2 3-3 1.7-3.2.6h-.7q-2.1 0-3.2-1.2-.6-.7-.7-1.8-1.2 1.4-3 2.4t-3.8 1q-3.6 0-5.6-2.1t-2-6q0-3.5 1.5-6.5t4-4.7 5.5-1.7q1.9 0 3.4.7t2.4 2.3v-.5l.3-1.2q0-.1.1-.3t.2-.1h2.7q.1 0 .3.2.1.2 0 .4l-2.7 13.7q-.1.5-.1 1.1 0 .8.3 1.1t1 .3q.6 0 1.3-.1t1.6-.5 1.7-1.2 1.3-1.9.5-3.1q0-6.5-3.9-10.4T20.1 5.7q-2.9 0-5.5 1.1T10 9.9t-3 4.5T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2q5.1 0 9.1-3.2.2-.2.5-.2t.5.3l.9 1.1q.2.2.2.5-.1.3-.3.5-2.3 1.8-5.1 2.8t-5.8 1q-3.4 0-6.6-1.3T8 32.1t-3.6-5.5T3 20t1.4-6.7T8 7.9t5.5-3.7 6.6-1.3q7.7 0 12.5 4.7T37.3 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAt;
