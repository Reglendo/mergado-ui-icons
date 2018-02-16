
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

class IconRouble extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--rouble ${p.addClass} ${p.className}`
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
                        <g><path d="M28.8 12.6q0-2.2-1.5-3.6t-3.8-1.4h-7.1v10h7.1q2.4 0 3.8-1.4t1.5-3.6zm5.3 0q0 4.3-2.9 7T24 22.4h-7.6V25h11.2q.4 0 .6.2t.2.5v2.9q0 .3-.2.5t-.6.2H16.4v4.3q0 .3-.2.5t-.5.2h-3.8q-.3 0-.5-.2t-.2-.5v-4.3h-5q-.3 0-.5-.2t-.2-.5v-2.9q0-.3.2-.5t.5-.2h5v-2.6h-5q-.3 0-.5-.2t-.2-.6v-3.3q0-.3.2-.5t.5-.2h5v-14q0-.3.2-.5t.5-.2H24q4.4 0 7.2 2.7t2.9 7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconRouble;
