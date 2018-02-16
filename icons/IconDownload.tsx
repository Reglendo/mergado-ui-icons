
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

class IconDownload extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--download ${p.addClass} ${p.className}`
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
                        <g><path d="M30.1 30q0-.6-.5-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.5-1zm5.7 0q0-.6-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .4 1-.4.4-1zm2.8-5v7.1q0 .9-.6 1.6t-1.5.6H3.6q-.8 0-1.5-.6t-.6-1.6V25q0-.9.6-1.5t1.5-.6H14l3 3q1.3 1.2 3.1 1.2t3-1.2l3-3h10.4q.9 0 1.5.6t.6 1.5zm-7.2-12.7q.4.9-.3 1.6l-10 10q-.4.4-1 .4t-1-.4l-10-10q-.7-.7-.3-1.6.3-.9 1.3-.9h5.7v-10q0-.6.4-1t1-.4h5.7q.6 0 1 .4t.5 1v10h5.7q.9 0 1.3.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDownload;
