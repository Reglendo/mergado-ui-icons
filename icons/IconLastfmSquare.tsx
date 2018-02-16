
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

class IconLastfmSquare extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--lastfm-square ${p.addClass} ${p.className}`
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
                        <g><path d="M35 23.5q0-3.9-5.3-5.4-.7-.2-1.1-.3t-.9-.6-.6-1q0-.1-.1-.2t0-.3-.1-.1q0-.8.6-1.4t1.3-.5q1.2 0 1.6.3.4.4.9 1.2l2-1.6q-.8-1.2-1.1-1.4-.7-.7-1.5-.9t-1.9-.2q-1.8 0-3.1 1.3t-1.4 3v.5q.4 2.2 1.5 3.2t3.3 1.6q.6.2 1.1.3t1 .5.8.8.3 1v.1q.1 1.3-.9 2.1t-2.2.8q-2.2 0-3.7-3.2-.6-1.1-1.2-2.7t-1.1-2.8-1.2-2.5-1.6-2.1-2.3-1.4-3.3-.5q-2.3 0-4.3 1.2t-3.2 3.3-1.1 4.3q.1 2.4 1.1 4.5t3 3.3 4.4 1.2q4.1 0 6.2-2.4.4-.6.7-1.2l-1.4-2.4q-.9 1.8-2.2 2.6t-3.2.8q-2.6 0-4.3-1.9t-1.7-4.6q0-2.3 1.8-4.2t4.2-1.9q2.5 0 3.8 1.2t2.3 3.8q.2.5.6 1.6t.6 1.7.7 1.6.9 1.7 1 1.4 1.2 1.2 1.5.7 1.8.3q2.4 0 4.1-1.5t1.7-3.9zm2.3-14.2v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLastfmSquare;
