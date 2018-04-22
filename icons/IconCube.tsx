
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

class IconCube extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--cube ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M21.5 36.4l14.3-7.8V14.4l-14.3 5.2v16.8zm-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7zm18.5-5.7v17.2q0 .8-.4 1.4t-1.1 1.1l-15.7 8.5q-.6.4-1.3.4t-1.4-.4L3 31.1q-.7-.4-1.1-1.1t-.4-1.4V11.4q0-.9.5-1.6t1.4-1.1L19.1 3q.5-.1 1-.1t1 .1l15.7 5.8q.8.3 1.3 1t.5 1.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCube;
