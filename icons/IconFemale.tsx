
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

class IconFemale extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--female ${p.addClass} ${p.className}`
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
                        <g><path d="M34.1 23.6q0 .9-.7 1.5t-1.5.6q-1.1 0-1.8-.9l-5-7.7h-1v3l5.5 9.2q.2.3.2.7 0 .6-.4 1t-1 .4h-4.3v6.1q0 1-.8 1.8t-1.7.7H18q-1 0-1.8-.7t-.7-1.8v-6.1h-4.3q-.6 0-1-.4t-.4-1q0-.4.2-.7l5.5-9.2v-3h-1l-5.1 7.7q-.6.9-1.8.9-.8 0-1.5-.6t-.6-1.5q0-.7.4-1.2l5.7-8.6q1.6-2.4 3.9-2.4h8.6q2.3 0 3.9 2.4l5.7 8.6q.4.5.4 1.2zM24.8 5.7q0 2.1-1.5 3.6t-3.5 1.4-3.6-1.4-1.4-3.6 1.4-3.5T19.8.7t3.5 1.5 1.5 3.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFemale;
