
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

class IconTicket extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--ticket ${p.addClass} ${p.className}`
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
                        <g><path d="M22.9 10.1l7 7-12.8 12.8-7-7zm-4.8 21.8l13.8-13.8q.5-.4.5-1t-.5-1l-8-8q-.4-.4-1-.4t-1 .4L8.1 21.9q-.5.4-.5 1t.5 1l8 8q.4.4 1 .4t1-.4zM38 17.7L17.7 38q-.8.8-2 .8t-2-.8l-2.8-2.8q1.2-1.3 1.2-3.1t-1.2-3-3-1.2-3.1 1.2L2 26.3q-.8-.8-.8-2t.8-2L22.3 2q.8-.8 2-.8t2 .8l2.8 2.8q-1.2 1.3-1.2 3.1t1.2 3 3 1.2 3.1-1.2l2.8 2.8q.8.8.8 2t-.8 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTicket;
