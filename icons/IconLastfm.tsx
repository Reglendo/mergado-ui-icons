
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

class IconLastfm extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--lastfm ${p.addClass} ${p.className}`
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
                        <g><path d="M28.8 15.7q0 .1.3.9.2.7.5 1.1t.9.8 1 .4 1.2.4q7.3 2 7.3 7.4 0 3.3-2.4 5.4T32 34.3q-1.4 0-2.5-.4t-2.1-1-1.7-1.7-1.4-2-1.2-2.3-1-2.3-.8-2.3-.8-2.2q-.7-1.8-1.4-2.9T17.5 15t-2.4-1.4-3.1-.5q-2.2 0-4.1 1.3t-3.1 3.2-1.1 4.1q0 3.6 2.3 6.3t5.9 2.6q4 0 5.8-2.1 1.2-1.4 1.8-2.6l1.9 3.4q-.3.8-1 1.6-2.9 3.4-8.6 3.4-3.3 0-6-1.8t-4.3-4.6T0 21.8q0-2.4 1-4.6t2.6-4 3.8-2.7 4.6-1q1.9 0 3.5.4t2.8 1.1 2.1 1.8T22 15t1.3 2.6 1.1 2.8 1.2 2.9 1.2 2.9q2.1 4.4 5.2 4.4 1.8 0 3.1-1.1t1.3-2.8q0-1-.5-1.6T34.8 24t-1.6-.7-1.9-.6-1.9-.7-1.9-1.2-1.4-1.8-.9-2.8v-.7q0-2.4 1.9-4.3t4.4-1.7q1.8.1 2.7.3t2 1.2q.3.2.5.5t.6.9.4.6l-2.8 2.2q-.6-1.1-1.2-1.6t-2.2-.5q-1.1 0-1.9.8t-.8 1.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLastfm;
