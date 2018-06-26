
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

class IconThLarge extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--th-large ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M18.6 22.9v8.5q0 1.2-.8 2t-2 .9H4.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2zm20 17.2v8.5q0 1.2-.8 2t-2 .9H24.4q-1.2 0-2.1-.9t-.8-2v-8.5q0-1.2.8-2.1t2.1-.8h11.4q1.1 0 2 .8t.8 2.1zm0-17.2v8.6q0 1.1-.8 2t-2 .8H24.4q-1.2 0-2.1-.8t-.8-2V5.7q0-1.1.8-2t2.1-.8h11.4q1.1 0 2 .8t.8 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconThLarge;
