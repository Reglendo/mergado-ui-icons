
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

class IconGroup extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--group ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M12.3 20q-3.4.1-5.5 2.7H4q-1.7 0-2.8-.9T0 19.4Q0 12 2.6 12q.1 0 .9.5t2 .8 2.5.5q1.4 0 2.7-.5-.1.8-.1 1.4 0 2.9 1.7 5.3zm22.3 13.2q0 2.5-1.6 4t-4 1.4H10.9q-2.6 0-4.1-1.4t-1.5-4q0-1.1.1-2.1t.3-2.3.5-2.2.9-2.1 1.3-1.6 1.8-1.2 2.3-.4q.2 0 .9.5t1.5 1 2.2 1 2.8.4 2.8-.4 2.3-1 1.5-1 .9-.5q1.2 0 2.3.4t1.8 1.2 1.2 1.6.9 2.1.6 2.2.3 2.3.1 2.1zM13.3 6.7q0 2.2-1.6 3.8T8 12t-3.8-1.5-1.5-3.8T4.2 3 8 1.4 11.7 3t1.6 3.7zm14.6 8q0 3.3-2.3 5.6t-5.7 2.4-5.6-2.4-2.3-5.6T14.3 9t5.6-2.3T25.6 9t2.3 5.7zm12 4.7q0 1.6-1.2 2.4t-2.9.9h-2.7q-2.2-2.6-5.5-2.7 1.6-2.4 1.6-5.3 0-.6-.1-1.4 1.4.5 2.8.5 1.2 0 2.5-.5t2-.8.9-.5q2.6 0 2.6 7.4zM37.2 6.7q0 2.2-1.5 3.8T31.9 12t-3.8-1.5-1.5-3.8T28.1 3t3.8-1.6T35.7 3t1.5 3.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGroup;
