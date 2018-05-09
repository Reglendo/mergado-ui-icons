
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconRoad extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--road ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M23.1 22.1V22l-.5-6.7q-.1-.2-.3-.4t-.4-.2H18q-.3 0-.5.2t-.2.4l-.5 6.7v.1q0 .2.2.4t.4.2h5.1q.2 0 .4-.2t.2-.4zm15.7 9.7q0 1.5-.9 1.5H23.3q.2 0 .4-.2t.2-.5l-.4-5.3q-.1-.3-.3-.5t-.4-.2h-5.7q-.3 0-.5.2t-.2.5l-.4 5.3q0 .3.2.5t.4.2H2q-1 0-1-1.5 0-1.1.6-2.4l8.6-21.7q.2-.4.6-.7t.8-.3h7q-.3 0-.5.2t-.2.5l-.3 4q0 .3.2.4t.4.2h3.5q.2 0 .4-.2t.2-.4l-.3-4q-.1-.3-.3-.5t-.4-.2h7q.4 0 .8.3t.5.7l8.7 21.7q.5 1.3.5 2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconRoad;
