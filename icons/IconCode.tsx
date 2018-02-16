
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

class IconCode extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--code ${p.addClass} ${p.className}`
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
                        <g><path d="M12.8 30.4l-1 1.1q-.2.2-.5.2t-.5-.2l-9.7-9.7q-.2-.2-.2-.5t.2-.4l9.7-9.7q.2-.2.5-.2t.5.2l1 1q.2.2.2.5t-.2.5l-8.1 8.1 8.1 8.2q.2.2.2.5t-.2.4zM25.1 8.3l-7.8 26.8q0 .3-.3.4t-.5.1l-1.3-.4q-.2-.1-.4-.3t0-.5l7.7-26.8q.1-.3.4-.4t.4-.1l1.3.4q.3 0 .4.3t.1.5zm13.6 13.5L29 31.5q-.2.2-.4.2t-.5-.2l-1-1.1q-.3-.2-.3-.4t.3-.5l8.1-8.2-8.1-8.1q-.3-.2-.3-.5t.3-.5l1-1q.2-.2.5-.2t.4.2l9.7 9.7q.2.2.2.4t-.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCode;
