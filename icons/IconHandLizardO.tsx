
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

class IconHandLizardO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--hand-lizard-o ${p.addClass} ${p.className}`
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
                        <g><path d="M22.3 2.6q1.2 0 2.3.6t1.8 1.4l11.1 15.2q2.3 3.1 2.3 7v6.9q0 1.5-1.1 2.6T36 37.4h-7.4q-1.6 0-2.7-1.1t-1.1-2.6v-3.5l-5.5-2.7H8.7q-1.6 0-2.6-1.1T5 23.7v-.6q0-2.3 1.6-3.9t4-1.7h8.1l.8-2.5H6.2q-1.9 0-3.4-1.3t-1.5-3.2Q0 9 0 7v-.7q0-1.5 1.1-2.6t2.6-1.1h18.6zm15 31.1v-6.9q0-3.1-1.8-5.5L24.3 6.1q-.7-1-2-1H3.7q-.5 0-.8.4t-.4.8v1q0 .3.2.8t.5.8q.2-.6.7-1T5 7.6h16.1v.6H5q-.5 0-.9.4t-.4.8q0 .9.1 1.2.1.8.8 1.4t1.6.5h14.2q.8 0 1.3.6t.6 1.3q0 .3-.1.6l-1.3 3.7q-.2.6-.7.9t-1 .4h-8.6q-1.3 0-2.2.9t-.9 2.2v.6q0 .5.3.9t.9.4h10.9q.3 0 .5.1l6.2 3.1q.5.2.7.7t.3.9v3.9q0 .5.4.8t.9.4H36q.5 0 .9-.4t.4-.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHandLizardO;
