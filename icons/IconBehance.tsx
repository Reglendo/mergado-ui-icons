
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

class IconBehance extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--behance ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.9 9.2H26v2.4h9.9V9.2zM31 17.5q-1.8 0-2.9 1t-1.2 2.7h8q-.4-3.7-3.9-3.7zm.3 11.3q1.2 0 2.4-.6t1.4-1.7h4.3q-1.9 6-8.3 6-4.1 0-6.6-2.6t-2.4-6.7q0-4.1 2.5-6.7t6.5-2.7q2.7 0 4.7 1.3t3 3.5 1 4.8q0 .3-.1.9H26.9q0 2.2 1.2 3.3t3.2 1.2zm-25.9-1h5.7q4 0 4-3.2 0-3.5-3.9-3.5H5.4v6.7zm0-10.4h5.4q1.5 0 2.4-.7t.9-2.2q0-2.8-3.7-2.8h-5v5.7zM0 7.5h11.5q1.7 0 3 .3t2.5.9 1.7 1.9.7 3q0 3.5-3.4 5.1 2.2.6 3.4 2.2t1.1 4q0 1.4-.5 2.6t-1.3 2.1-1.9 1.3-2.3.8-2.6.3H0V7.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBehance;
