
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

class IconPlayCircle extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--play-circle ${p.addClass} ${p.className}`
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
                        <g><path d="M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zm8.6 18.3q.7-.4.7-1.2t-.7-1.2l-12.1-7.2q-.7-.4-1.5 0-.7.4-.7 1.3v14.2q0 .9.7 1.3.4.2.8.2.3 0 .7-.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPlayCircle;
