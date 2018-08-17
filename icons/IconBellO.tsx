
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

class IconBellO extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--bell-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20.4 37.9q0-.4-.4-.4-1.3 0-2.3-1t-.9-2.2q0-.4-.4-.4t-.3.4q0 1.6 1.1 2.8t2.8 1.1q.4 0 .4-.3zM5.5 31.4h29q-5.9-6.7-5.9-18.5 0-1.2-.6-2.4t-1.5-2.3-2.7-1.8-3.8-.7-3.8.7-2.7 1.8-1.5 2.3-.6 2.4q0 11.8-5.9 18.5zm33.1 0q0 1.2-.9 2t-2 .9h-10q0 2.4-1.7 4T20 40t-4-1.7-1.7-4h-10q-1.2 0-2-.9t-.9-2q1.1-.9 2.1-1.9t1.9-2.7T7 23.3t1.1-4.6.5-5.8q0-3.4 2.6-6.3T18 3q-.1-.4-.1-.9 0-.8.6-1.5T20 0t1.5.6.6 1.5q0 .5-.1.9 4.2.6 6.8 3.6t2.6 6.3q0 3.1.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBellO;
