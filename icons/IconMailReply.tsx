
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

class IconMailReply extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--mail-reply ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M40 25q0 3.7-2.8 10.1-.1.1-.3.5t-.3.7-.3.5q-.2.3-.6.3-.3 0-.5-.2t-.2-.5q0-.2.1-.6t0-.6q.1-1.5.1-2.7 0-2.3-.4-4t-1-3.1-1.8-2.3-2.4-1.5-3-1-3.4-.5-3.9-.1h-5v5.7q0 .6-.4 1t-1 .4-1-.4L.4 15.3q-.4-.4-.4-1t.4-1L11.9 1.9q.4-.5 1-.5t1 .5.4 1v5.7h5q15.9 0 19.5 9 1.2 3 1.2 7.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMailReply;
