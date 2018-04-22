
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

class IconWrench extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--wrench ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M9.6 32.9q0-.6-.5-1t-1-.5-1 .5-.4 1 .4 1 1 .4 1-.4.5-1zm14.3-9.4L8.7 38.7q-.8.8-2 .8-1.1 0-2-.8l-2.4-2.4q-.8-.8-.8-2t.8-2l15.2-15.2q.9 2.1 2.6 3.8t3.8 2.6zm14.2-9.7q0 .8-.5 2.3-1.1 3-3.7 4.9t-5.8 1.9q-4.1 0-7-3t-3-7 3-7.1 7-2.9q1.3 0 2.8.3t2.4 1.1q.3.2.3.6t-.3.6l-6.6 3.8v5l4.3 2.4q.1-.1 1.8-1.1t3-1.8 1.6-.8q.3 0 .5.2t.2.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconWrench;
