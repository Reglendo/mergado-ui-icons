
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

class IconMapO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--map-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.2 2.8q.6.4.6 1.1v27.3q0 .4-.3.7t-.5.4l-12.4 5q-.5.2-1 0l-11.9-4.8-12 4.8q-.2.1-.5.1t-.7-.2q-.5-.4-.5-1.1V8.8q0-.4.2-.7t.6-.4l12.4-5q.5-.2.9 0l12 4.8L38 2.7q.7-.2 1.2.1zM14.3 5.4v24.7l11.2 4.5V9.9zM2.5 9.7v24.6L13 30.1V5.4zm34.8 20.6V5.7L26.7 9.9v24.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMapO;
