
import * as React from "react"
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

class IconCompress extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--compress ${p.addClass} ${p.className}`
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
                        <g><path d="M20.1 21.4v10q0 .6-.4 1t-1 .5-1-.5l-3.2-3.2-7.4 7.4q-.2.3-.5.3t-.5-.3l-2.6-2.5q-.2-.2-.2-.5t.2-.5l7.4-7.5-3.2-3.2q-.4-.4-.4-1t.4-1 1-.4h10q.6 0 1 .4t.4 1zM37 6.4q0 .3-.2.5l-7.4 7.5 3.2 3.2q.4.4.4 1t-.4 1-1 .4h-10q-.6 0-1-.4t-.5-1v-10q0-.6.5-1t1-.5 1 .5l3.2 3.2 7.4-7.4q.2-.3.5-.3t.5.3l2.6 2.5q.2.2.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCompress;
