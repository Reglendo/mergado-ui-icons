
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

class IconExclamationCircle extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--exclamation-circle ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zM23 30.7v-4.2q0-.4-.2-.6t-.5-.2H18q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h4.3q.3 0 .5-.2t.2-.5zm0-7.7l.4-13.8q0-.3-.3-.5-.2-.1-.5-.1h-4.9q-.3 0-.5.1-.3.2-.3.4l.4 13.9q0 .2.2.4t.6.2h4.1q.3 0 .5-.2t.3-.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconExclamationCircle;
