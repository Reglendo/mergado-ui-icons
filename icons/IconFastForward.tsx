
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

class IconFastForward extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--fast-forward ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M1 36.9q-.4.4-.7.2t-.3-.7V3.6q0-.6.3-.7t.7.2L16.9 19l.2.4V3.6q0-.6.3-.7t.7.2L34 19q.2.2.3.4V4.3q0-.6.4-1t1-.4h2.9q.5 0 1 .4t.4 1v31.4q0 .6-.4 1t-1 .4h-2.9q-.6 0-1-.4t-.4-1V20.6q-.1.2-.3.4L18.1 36.9q-.4.4-.7.2t-.3-.7V20.6l-.2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFastForward;
