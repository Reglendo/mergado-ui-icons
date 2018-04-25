
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

class IconHeader extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--header ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.5 37.1h-2.9q-2 0-3-.1-1 0-2.9.1t-3 0q-.5 0-.8-.4t-.3-1q0-.7.4-1.1t.8-.3 1.2-.2 1-.3q.7-.5.7-3.2v-9.4q-.3-.1-1.1-.1H12.5q-.8 0-1.1.1-.1.2-.1.7v8.3q0 3.2.8 3.7.4.2 1.1.2t1.3.1 1 .4.4 1q0 .6-.2 1t-.9.5h-3.1q-2.1 0-3.1-.1-.9 0-2.8.1t-2.9 0q-.5 0-.7-.4t-.3-1q0-.7.3-1t.8-.4 1.1-.2.9-.3q.8-.5.8-3.2l-.1-1.3V11.2q0-.1.1-.6t0-.8-.1-.9-.1-.9-.1-.8-.3-.7-.3-.4q-.3-.3-1-.3t-1.2-.1-.9-.3-.4-1q0-.6.3-1t.8-.5h3.1q2.1 0 3 .1 1 0 2.9-.1t2.8 0q.6 0 .8.4t.3 1.1q0 .7-.4 1t-.8.3-1.1.1-1 .3q-.8.5-.8 3.6v7.1q0 .5.1.7.3.1.8.1h15.6q.6 0 .9-.1V9.7q0-3.1-.7-3.6-.5-.3-1.4-.3t-1.4-.3-.6-1.1q0-.6.3-1.1t.8-.4h3q2 0 2.9.1 1 0 2.9-.1t2.9 0q.5 0 .8.4t.3 1.1q0 .7-.4 1t-.9.3-1.1.1-1 .3q-.8.5-.8 3.6v21q0 2.7.8 3.1.3.3 1 .3t1.2.1.9.4.4 1q0 .6-.2 1t-.9.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHeader;
