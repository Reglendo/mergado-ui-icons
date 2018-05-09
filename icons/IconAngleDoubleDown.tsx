
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

class IconAngleDoubleDown extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--angle-double-down ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31 19.3q0 .3-.2.5L20.4 30.2q-.3.2-.5.2t-.6-.2L8.9 19.8q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.3.5-.3t.5.3l8.8 8.7 8.7-8.7q.3-.3.5-.3t.6.3l1.1 1.1q.2.2.2.5zm0-8.6q0 .3-.2.5L20.4 21.6q-.3.3-.5.3t-.6-.3L8.9 11.2q-.2-.2-.2-.5t.2-.5l1.2-1.1q.2-.2.5-.2t.5.2l8.8 8.8 8.7-8.8q.3-.2.5-.2t.6.2l1.1 1.1q.2.2.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAngleDoubleDown;
