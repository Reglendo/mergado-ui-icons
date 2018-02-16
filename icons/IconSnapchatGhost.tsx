
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

class IconSnapchatGhost extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--snapchat-ghost ${p.addClass} ${p.className}`
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
                        <g><path d="M20.4 2.9q3-.1 5.4 1.5t3.6 4.3q.7 1.3.7 4 0 1-.2 4.2.3.2.6.2.4 0 1.1-.3t1.2-.3q.6 0 1.2.4t.6 1q0 .7-.7 1.2t-1.5.7-1.6.7-.7 1q0 .4.3 1 .8 1.8 2.3 3.3t3.2 2.3q.6.3 1.8.5.6.1.6.8 0 1.6-4.9 2.3-.1.2-.2.9t-.3 1-.8.4q-.4 0-1.4-.1t-1.4-.2q-.8 0-1.4.1-.7.1-1.4.5t-1.3.9-1.3.9-1.7.7-2.2.3q-1.1 0-2.1-.3t-1.7-.7-1.3-.9-1.3-.9-1.4-.5q-.5-.1-1.4-.1-.5 0-1.4.2t-1.3.2q-.6 0-.8-.5t-.3-1-.3-.9q-4.9-.7-4.9-2.3 0-.7.7-.8 1.1-.2 1.7-.5 1.8-.7 3.3-2.3t2.3-3.3q.2-.6.2-1 0-.6-.7-1t-1.5-.7-1.6-.7-.7-1.2q0-.6.6-1t1.2-.4q.4 0 1.1.3t1.2.3q.4 0 .7-.2-.2-3.1-.2-4.2 0-2.7.6-4 1.4-3.1 3.8-4.4t5.9-1.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSnapchatGhost;
