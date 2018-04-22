
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

class IconArchive extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--archive ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M24.3 18.6q0-.6-.4-1t-1-.5h-5.8q-.5 0-1 .5t-.4 1 .4 1 1 .4h5.8q.5 0 1-.4t.4-1zm12.8-4.3v21.4q0 .6-.4 1t-1 .4H4.3q-.6 0-1-.4t-.4-1V14.3q0-.6.4-1t1-.4h31.4q.6 0 1 .4t.4 1zm1.5-10V10q0 .6-.5 1t-1 .4H2.9q-.6 0-1-.4t-.5-1V4.3q0-.6.5-1t1-.4h34.2q.6 0 1 .4t.5 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconArchive;
