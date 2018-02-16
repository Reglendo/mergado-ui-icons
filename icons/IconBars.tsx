
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

class IconBars extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--bars ${p.addClass} ${p.className}`
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
                        <g><path d="M37.3 30v2.9q0 .5-.4 1t-1 .4H4.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h31.5q.5 0 1 .4t.4 1zm0-11.4v2.8q0 .6-.4 1t-1 .5H4.4q-.6 0-1-.5t-.4-1v-2.8q0-.6.4-1t1-.5h31.5q.5 0 1 .5t.4 1zm0-11.5V10q0 .6-.4 1t-1 .4H4.4q-.6 0-1-.4T3 10V7.1q0-.5.4-1t1-.4h31.5q.5 0 1 .4t.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBars;
