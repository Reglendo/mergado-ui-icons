
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

class IconDiamond extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--diamond ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M4.1 17.5l12.1 12.9-5.8-12.9H4.1zm15.8 15l6.7-15H13.1zM10.4 15l4-7.4H9.3L3.7 15h6.7zm13.1 15.4l12.1-12.9h-6.2zM13.3 15h13.2l-4-7.4h-5.3zm16 0H36l-5.6-7.4h-5.1zM32 5.6l7.5 9.9q.3.4.3.8t-.4.8L20.8 37q-.4.4-.9.4T19 37L.3 17.1q-.3-.3-.3-.8t.3-.8l7.4-9.9q.4-.5 1-.5h22.4q.6 0 .9.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDiamond;
