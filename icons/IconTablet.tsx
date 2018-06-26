
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

class IconTablet extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--tablet ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M21.3 31.4q0-.5-.4-1t-1-.4-1 .4-.5 1 .5 1 1 .5 1-.5.4-1zm8.6-3.5V6.4q0-.3-.3-.5t-.5-.2H10.6q-.3 0-.5.2t-.2.5v21.5q0 .2.2.5t.5.2h18.5q.3 0 .5-.2t.3-.5zm2.8-21.5v24.3q0 1.5-1 2.5t-2.6 1.1H10.6q-1.5 0-2.6-1.1t-1-2.5V6.4Q7 5 8.1 3.9t2.5-1h18.5q1.5 0 2.6 1t1 2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTablet;
