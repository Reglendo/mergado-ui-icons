
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

class IconChild extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--child ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M32 12.2l-6.5 6.6v18.3q0 1.1-.7 1.8t-1.8.7-1.8-.7-.7-1.8v-8.5h-1.4v8.5q0 1.1-.8 1.8t-1.7.7-1.8-.7-.7-1.8V18.8l-6.5-6.6q-.7-.6-.7-1.5t.7-1.5 1.5-.6 1.5.6l5.1 5.1h8.2L29 9.2q.6-.6 1.5-.6t1.5.6.6 1.5-.6 1.5zm-7.2-3.6q0 2-1.5 3.5t-3.5 1.5-3.6-1.5-1.4-3.5T16.2 5t3.6-1.4T23.3 5t1.5 3.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconChild;
