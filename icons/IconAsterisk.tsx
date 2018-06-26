
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

class IconAsterisk extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--asterisk ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.6 23.4q1 .6 1.3 1.8t-.3 2.1l-1.4 2.5q-.6 1-1.7 1.3t-2.2-.3l-5.9-3.4v6.9q0 1.1-.9 2t-2 .8h-2.9q-1.1 0-2-.8t-.8-2v-6.9l-6 3.4q-1 .6-2.1.3t-1.8-1.3l-1.4-2.5q-.6-1-.3-2.1t1.4-1.8l5.9-3.4-5.9-3.4q-1.1-.6-1.4-1.8t.3-2.1l1.4-2.5q.6-1 1.8-1.3t2.1.3l6 3.4V5.7q0-1.1.8-2t2-.8h2.9q1.2 0 2 .8t.9 2v6.9l5.9-3.4q1-.6 2.2-.3t1.7 1.3l1.4 2.5q.6 1 .3 2.1t-1.3 1.8l-6 3.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAsterisk;
