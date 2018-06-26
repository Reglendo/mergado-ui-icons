
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

class IconCrop extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--crop ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M13.9 28.6h13.3V15.3zm-1-1l13.3-13.3H12.9v13.3zm25.7 1.7v4.3q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-5H7.9q-.3 0-.5-.2t-.2-.5V14.3h-5q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h5v-5q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v5h19l5.5-5.5q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5l-5.5 5.5v19h5q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCrop;
