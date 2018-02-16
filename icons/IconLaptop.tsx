
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

class IconLaptop extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--laptop ${p.addClass} ${p.className}`
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
                        <g><path d="M8.6 28q-1.3 0-2.3-1t-1-2.3V10q0-1.3 1-2.3t2.3-1h22.6q1.4 0 2.4 1t1 2.3v14.7q0 1.3-1 2.3t-2.4 1H8.6zM8 10v14.7q0 .2.2.4t.4.2h22.6q.3 0 .5-.2t.2-.4V10q0-.2-.2-.4t-.5-.2H8.6q-.2 0-.4.2T8 10zm28.5 19.3h3.4v2q0 .8-1 1.4t-2.4.6H3.3q-1.3 0-2.3-.6t-1-1.4v-2h36.5zm-14.9 2q.3 0 .3-.3t-.3-.4h-3.3q-.4 0-.4.4t.4.3h3.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLaptop;
