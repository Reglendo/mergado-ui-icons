
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

class IconQuoteRight extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--quote-right ${p.addClass} ${p.className}`
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
                        <g><path d="M18.6 7.1v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9H5.8q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5Q4 20 2.7 18.8t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3zm20 0v15.8q0 2.3-.9 4.4t-2.4 3.6-3.7 2.5-4.4.9h-1.4q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h1.4q2.4 0 4.1-1.7t1.6-4v-.8q0-.8-.6-1.5t-1.5-.6h-5q-1.8 0-3.1-1.2t-1.2-3.1V7.1q0-1.7 1.3-3t3-1.2h8.6q1.7 0 3 1.2t1.2 3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQuoteRight;
