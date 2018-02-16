
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

class IconArrowsH extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--arrows-h ${p.addClass} ${p.className}`
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
                        <g><path d="M40 20q0 .6-.4 1l-5.7 5.7q-.5.4-1 .4t-1-.4-.5-1v-2.8H8.6v2.8q0 .6-.5 1t-1 .4-1-.4L.4 21q-.4-.4-.4-1t.4-1l5.7-5.7q.5-.4 1-.4t1.1.4.4 1v2.8h22.8v-2.8q0-.6.5-1t1-.4 1 .4l5.7 5.7q.4.4.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconArrowsH;
