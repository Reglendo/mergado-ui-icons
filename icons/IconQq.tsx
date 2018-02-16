
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

class IconQq extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--qq ${p.addClass} ${p.className}`
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
                        <g><path d="M6 18q-.2-.4-.2-1.2 0-.4.3-1.1t.5-1q0-.5.2-1.2t.5-.9q0-3.1 2.1-6.5t4.8-4.6Q17.3 0 21.4 0q3 0 6 1.2 1.1.5 2 1.1T31 3.5t1.2 1.6 1 1.6.7 1.9.5 2 .5 2.2l.1.1q1.2 1.9 1.2 3.4 0 .3-.2.8t-.2.9v.1q0 .1.1.1t0 .1q1.8 2.5 2.7 4.7t1 4.7q0 1-.4 2.2t-1.3 1.3q-.2 0-.4-.2t-.4-.4-.5-.5-.3-.6-.3-.6-.2-.4h-.1l-.1.1q-1.3 3.4-2.9 5 .4.4 1.3.8t1.6.9.8 1.5q-.1.1-.1.3t-.2.4q-1.4 2.2-6.7 2.2-1.2 0-2.5-.2t-2.2-.4-2.3-.7q-.3-.1-.5-.2-.3-.1-1.1-.1t-.8 0q-1 1-2.9 1.5t-3.8.4h-1.5q-.8 0-2.1-.2t-2.2-.5-1.7-.9-.7-1.4q0-.9.2-1.3t.9-1.1l.9-.3q.6-.2 1.1-.3h.4v-.2q-1.1-.2-2.5-2.3T4.5 28l-.1-.1q-.1 0-.3.4-.4 1-1.2 1.7t-1.7.8q-.1 0-.2-.1t-.1-.1q-.5-1.2-.5-2.2Q.4 22.3 6 18z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQq;
