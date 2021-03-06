
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

class IconViadeo extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--viadeo ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M28.9 24.7q0 4.8-3.2 8.3-3.3 3.6-8.5 3.6T8.8 33q-3.3-3.5-3.3-8.3 0-3.3 1.5-6.1t4.2-4.3 6-1.7q2.2 0 4.1.7-.7 1.4-.9 2.8-1.5-.6-3.2-.6-3.7 0-6.2 2.8t-2.6 6.5q0 3.8 2.5 6.4t6.3 2.6 6.3-2.6 2.5-6.4q0-2-.7-3.7 1.4-.3 2.7-1.1.9 2.1.9 4.7zm-4.5-4.2q0 4.3-1.8 7.7t-5.3 5.6H17q-.7 0-1.4-.1 1.8-.7 3.3-2.3t2.2-3.4 1.3-4.2.7-4.3.1-4v-2.3q1.2 3.6 1.2 7.3zm-1.2-7.4v.1q-1.7-4.8-4.6-9.8 1.9 1.3 3.1 4.1t1.5 5.6zm5.4 4.6q-1.9 0-3.6-1.7 4.9-2.7 6.5-5.5.4-.8.5-1.3-1 2.1-3.1 3.8t-4.6 2.1q-.8-1.2-.8-2.5 0-.8.4-1.8t1-1.5q1-1 3.5-1.6 1.3-.4 2.3-1.3t1.7-2.3Q34 6.5 34 9.8q0 2.4-.5 3.8-.7 1.7-2 2.9t-2.9 1.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconViadeo;
