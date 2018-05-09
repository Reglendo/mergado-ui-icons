
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

class IconForumbee extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--forumbee ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M23.8 3.3q-7 2.7-12.4 8.1t-8 12.5Q3 22 3 20q0-4.6 2.3-8.6t6.2-6.2 8.6-2.3q1.8 0 3.7.4zM29.9 6q2 1.5 3.6 3.5-8.7 2.5-15 8.9T9.6 33.5q-2.1-1.6-3.5-3.6 2.5-8.6 8.9-15T29.9 6zM13.5 35.8q2.6-8 8.5-13.9t13.8-8.6q.9 2.1 1.2 4.4-6.5 2.7-11.5 7.7t-7.7 11.5q-2.3-.3-4.3-1.1zm23.8 1.3Q33 36 29.1 34.5q-3 1.9-6.5 2.4 2.5-4.6 6.1-8.3t8.3-6.1q-.5 3.4-2.3 6.3 1.5 3.9 2.6 8.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconForumbee;
