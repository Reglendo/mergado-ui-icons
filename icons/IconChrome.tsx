
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

class IconChrome extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--chrome ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M19.9 0Q25.3 0 30 2.7q5.2 3 7.9 8.3l-16.6-.9q-3.6-.2-6.6 1.7t-4.1 5.1L4.4 7.4q2.9-3.5 7-5.4t8.5-2zM3.3 9l7.5 14.8q1.6 3.2 4.7 4.9t6.5 1l-5.1 10.1q-4.7-.8-8.6-3.6t-6.1-7T0 20q0-6 3.3-11zm35.4 3.8q1.3 3.4 1.3 6.9t-1.1 6.9-3.4 6-5.5 4.7q-5.1 3-11.1 2.7l9-13.9q2-3 1.9-6.5t-2.4-6.2zm-18.7.5q2.8 0 4.8 1.9t1.9 4.8-1.9 4.8-4.8 1.9-4.8-1.9-1.9-4.8 1.9-4.8 4.8-1.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconChrome;
