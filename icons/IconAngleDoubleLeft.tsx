
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

class IconAngleDoubleLeft extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--angle-double-left ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M22 30.7q0 .3-.2.5l-1.1 1.1q-.3.3-.6.3t-.5-.3L9.2 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.3-.2.5-.2t.6.2l1.1 1.1q.2.3.2.5t-.2.6L13 21.4l8.8 8.8q.2.2.2.5zm8.6 0q0 .3-.3.5l-1.1 1.1q-.2.3-.5.3t-.5-.3L17.8 21.9q-.2-.2-.2-.5t.2-.5l10.4-10.4q.2-.2.5-.2t.5.2l1.1 1.1q.3.3.3.5t-.3.6l-8.7 8.7 8.7 8.8q.3.2.3.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAngleDoubleLeft;
