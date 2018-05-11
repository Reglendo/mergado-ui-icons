
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

class IconInstagram extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--instagram ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M33.4 31.8V17.4h-3q.4 1.4.4 2.9 0 2.8-1.4 5.2t-3.9 3.7-5.3 1.4q-4.4 0-7.6-3t-3.1-7.3q0-1.5.5-2.9H6.8v14.4q0 .6.4 1t1 .4H32q.6 0 1-.4t.4-1zm-6.3-11.9q0-2.7-2.1-4.7t-4.8-1.9q-2.9 0-4.9 1.9t-2 4.7 2 4.8 4.9 1.9q2.8 0 4.8-1.9t2.1-4.8zm6.3-8V8.2q0-.6-.4-1.1t-1.1-.4H28q-.7 0-1.1.4t-.5 1.1v3.7q0 .6.5 1.1t1.1.4h3.9q.6 0 1.1-.4t.4-1.1zm3.9-4.6v25.4q0 1.9-1.3 3.1t-3.1 1.3H7.4q-1.8 0-3.1-1.3T3 32.7V7.3q0-1.9 1.3-3.1t3.1-1.3h25.5q1.8 0 3.1 1.3t1.3 3.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconInstagram;
