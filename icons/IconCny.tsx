
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

class IconCny extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--cny ${p.addClass} ${p.className}`
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
                        <g><path d="M22 34.3h-3.9q-.3 0-.5-.2t-.2-.5v-7.4H11q-.3 0-.5-.2t-.2-.5v-2.3q0-.3.2-.5t.5-.2h6.4v-1.9H11q-.3 0-.5-.2t-.2-.5v-2.4q0-.2.2-.5t.5-.2h4.8L8.6 3.9q-.2-.3 0-.7.2-.3.6-.3h4.3q.5 0 .7.4l4.8 9.4q.4.9 1.2 2.8.3-.5.7-1.5t.6-1.3l4.3-9.4q.2-.4.6-.4h4.3q.4 0 .6.3.2.3 0 .7l-7 12.9h4.8q.3 0 .5.2t.3.5v2.4q0 .3-.3.5t-.5.2h-6.4v1.9h6.4q.3 0 .5.2t.3.5v2.3q0 .3-.3.5t-.5.2h-6.4v7.4q0 .3-.2.5t-.5.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCny;
