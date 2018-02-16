
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

class IconSlack extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--slack ${p.addClass} ${p.className}`
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
                        <g><path d="M35.4 17.3q1.4 0 2.3.9t.9 2.3q0 2.2-2 2.9l-3.9 1.3 1.3 3.7q.1.5.1 1.1 0 1.3-.9 2.3t-2.3.9q-1 0-1.9-.6t-1.2-1.6l-1.2-3.7-6.9 2.4 1.2 3.7q.2.5.2 1 0 1.3-.9 2.3t-2.3.9q-1.1 0-1.9-.6t-1.2-1.6l-1.2-3.6-3.4 1.2q-.7.2-1.2.2-1.3 0-2.2-.9t-.9-2.3q0-1 .6-1.9t1.6-1.1l3.5-1.2-2.4-7-3.5 1.2q-.5.2-1 .2-1.4 0-2.3-.9t-.9-2.3q0-1 .6-1.9t1.6-1.2l3.5-1.1L6 8.7q-.1-.5-.1-1 0-1.4.9-2.3t2.3-1q1 0 1.9.6t1.1 1.6l1.3 3.6 6.9-2.3-1.2-3.6q-.2-.5-.2-1.1 0-1.3.9-2.2t2.3-1q1.1 0 1.9.6t1.2 1.6l1.2 3.6L30 4.6q.5-.2 1-.2 1.3 0 2.3.9t.9 2.2q0 1-.7 1.8t-1.6 1.2l-3.5 1.2 2.3 7.1 3.7-1.3q.5-.2 1-.2zm-17.7 5.9l6.9-2.4-2.3-7-7 2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSlack;
