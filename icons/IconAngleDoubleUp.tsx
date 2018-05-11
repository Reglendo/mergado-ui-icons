
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

class IconAngleDoubleUp extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--angle-double-up ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31 29.3q0 .3-.2.5l-1.1 1.1q-.3.2-.6.2t-.5-.2l-8.7-8.8-8.8 8.8q-.2.2-.5.2t-.5-.2l-1.2-1.1q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.3.6-.3t.5.3l10.4 10.4q.2.2.2.5zm0-8.6q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3l-8.7-8.7-8.8 8.7q-.2.3-.5.3t-.5-.3l-1.2-1.1q-.2-.2-.2-.5t.2-.5L19.3 9.8q.3-.2.6-.2t.5.2l10.4 10.4q.2.2.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAngleDoubleUp;
