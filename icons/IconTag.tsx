
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

class IconTag extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--tag ${p.addClass} ${p.className}`
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
                        <g><path d="M13 10q0-1.2-.8-2t-2.1-.9-2 .9-.8 2 .8 2 2 .9 2.1-.9.8-2zm23.8 12.9q0 1.1-.8 2L25 35.8q-.8.9-2 .9t-2-.9L5 19.9q-.8-.9-1.4-2.3T3 15V5.7q0-1.1.8-2t2.1-.8h9.2q1.2 0 2.7.5T20 4.9l16 15.9q.8.9.8 2.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTag;
