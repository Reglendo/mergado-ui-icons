
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

class IconParagraph extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--paragraph ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34 4.2v1.6q0 .7-.4 1.4t-.9.7h-1.2q-.6.2-.8.7v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V8.6h-3.1v27.2q0 .5-.4.9t-1 .4h-2.4q-.6 0-1-.4t-.4-.9V24.7q-3.3-.3-5.5-1.3-2.8-1.3-4.2-4Q6 16.8 6 13.6q0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-.8 9.3-.8h10.7q.5 0 .9.4t.4.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconParagraph;
