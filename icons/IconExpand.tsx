
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

class IconExpand extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--expand ${p.addClass} ${p.className}`
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
                        <g><path d="M19.9 23.6q0 .3-.3.5l-7.4 7.4 3.2 3.2q.5.4.5 1t-.5 1-1 .4h-10q-.6 0-1-.4t-.4-1v-10q0-.6.4-1t1-.4 1 .4l3.2 3.2 7.5-7.4q.2-.2.5-.2t.5.2l2.5 2.6q.3.2.3.5zM37.3 4.3v10q0 .6-.4 1t-1 .4-1-.4l-3.3-3.2-7.4 7.4q-.2.2-.5.2t-.5-.2l-2.5-2.6q-.3-.2-.3-.5t.3-.5l7.4-7.4-3.2-3.2q-.5-.4-.5-1t.5-1 1-.4h10q.5 0 1 .4t.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconExpand;
