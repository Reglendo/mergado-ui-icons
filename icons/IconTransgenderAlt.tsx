
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

class IconTransgenderAlt extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--transgender-alt ${p.addClass} ${p.className}`
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
                        <g><path d="M30.1.7q0-.3.2-.5t.5-.2h6.4q.6 0 1 .4t.4 1v6.5q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5v-3l-5.7 5.7q2.8 3.5 2.8 8 0 4.9-3.3 8.6t-8.1 4.1v3h2.1q.4 0 .6.2t.2.5v1.4q0 .3-.2.5t-.6.2h-2.1v2.2q0 .3-.2.5t-.5.2h-1.4q-.4 0-.6-.2t-.2-.5v-2.2h-2.1q-.3 0-.5-.2t-.2-.5V35q0-.3.2-.5t.5-.2h2.1v-3q-4.8-.5-8.1-4.1t-3.3-8.6q0-4.5 2.8-8L8.9 9.4l-2.3 2.5q-.2.2-.5.2t-.5-.2l-1.1-1q-.2-.1-.2-.4t.2-.6l2.3-2.5-2.4-2.5v3q0 .3-.2.5t-.6.2H2.2q-.3 0-.5-.2t-.2-.5V1.4q0-.6.4-1t1-.4h6.5q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2h-3l2.4 2.3 1.9-2.1q.2-.2.5-.2t.5.2l1.1 1q.2.1.2.4t-.2.6l-2 2.2 1.3 1.2q3.5-2.8 8-2.8t8 2.8l5.7-5.6h-3q-.3 0-.5-.2t-.2-.6V.7zm-10 27.9q4.1 0 7-3t3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1 2.9 7 7.1 3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTransgenderAlt;
