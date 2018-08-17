
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

class IconShareAlt extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--share-alt ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30.1 22.9q3 0 5.1 2t2.1 5.1-2.1 5.1-5.1 2-5-2T23 30v-.8l-8-4q-2 1.9-4.9 1.9-2.9 0-5-2T3 20t2.1-5.1 5-2q2.9 0 4.9 1.9l8-4V10q0-3 2.1-5.1t5-2 5.1 2 2.1 5.1-2.1 5.1-5.1 2q-2.8 0-4.8-1.9l-8.1 4q.1.5.1.8t-.1.8l8.1 4q2-1.9 4.8-1.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShareAlt;
