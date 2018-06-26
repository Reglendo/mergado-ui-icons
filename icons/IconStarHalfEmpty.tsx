
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconStarHalfEmpty extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--star-half-empty ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M28 21.4l5.7-5.6-9.4-1.4-.7-1.3-3.5-7.2v21.5l1.3.7 7.1 3.7-1.4-7.9-.2-1.5zm10.1-5.9L30 23.4l1.9 11.2q.1.7-.2 1.1t-.7.4q-.4 0-.9-.2l-10-5.3-10 5.3q-.6.2-.9.2-.6 0-.8-.4t-.1-1.1l1.9-11.2-8.1-7.9q-.8-.7-.6-1.3t1.3-.8L14 11.8l5-10.2q.4-.9 1.1-.9.6 0 1.1.9l5 10.2 11.2 1.6q1 .2 1.2.8t-.5 1.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconStarHalfEmpty;
