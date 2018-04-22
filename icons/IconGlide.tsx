
import * as React from "react"
import shallowCompare from "shallow-compare"
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

class IconGlide extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return shallowCompare(this,this.props,nextProps) }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon m--glide ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M22.3 11.5q0 .6-.3 2.1-.2 1.1-.7 3.3t-.6 3.4q-.1.2-.1.3t-.3 0q-.5.1-.7.1-1.3 0-1.9-1.1t-.6-2.6q0-1.9.8-3.9t2.3-2.7q.6-.3 1.1-.3.7 0 .8.3t.2 1.1zM33.2 21q0-.4-.9-1.7t-1.2-1.5q-.4-.2-.7-.2-2 0-5.1 1.7l.6-3q.5-2.5.6-4 0-5.2-5.4-5.2-.6 0-1.6.1-2.1.4-3.7 2T13.3 13t-.8 4.2q0 3.2 1.8 5t5 1.8h.6v.1q-.1.8-.6 2.6-.3 1.2-1.2 2.3t-1.8 1.1q-.9 0-.9-1.1 0-.5.2-1t.6-.9.6-.6.6-.5.2-.2l-.1-.2q-.6-.5-1.3-.8t-1.5-.3q-.8 0-1.4.7t-.9 1.7-.3 1.7q0 1.9 1.2 3.1t3 1.2q1.9 0 3.5-1.1t2.6-2.8 1.5-3.5q.1-.5.3-1.4t.4-1.5q0-.3.3-.4 2.6-1.4 5-1.4 1.1 0 2.9.4 0 .1.1.1t.2-.1.1-.2zm4.1-11.7v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGlide;
