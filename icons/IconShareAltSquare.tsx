
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

class IconShareAltSquare extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--share-alt-square ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31.6 26.7q0-2-1.4-3.4t-3.4-1.4q-1.9 0-3.2 1.3l-5.4-2.7v-1l5.4-2.7q1.3 1.3 3.2 1.3 2 0 3.4-1.4t1.4-3.4-1.4-3.3-3.4-1.4-3.4 1.4-1.4 3.3q0 .2.1.5l-5.4 2.7q-1.4-1.3-3.2-1.3-2 0-3.4 1.4T8.7 20t1.4 3.4 3.4 1.4q1.8 0 3.2-1.3l5.4 2.7q-.1.3-.1.5 0 1.9 1.4 3.3t3.4 1.4 3.4-1.4 1.4-3.3zm5.7-17.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShareAltSquare;
