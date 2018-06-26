
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

class IconMap extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--map ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M11.4 0q.3 0 .5.2t.2.5v32.9q0 .4-.3.6L1.1 39.9q-.2.1-.4.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.4-.6L11.1.1q.2-.1.3-.1zm27.9 0q.3 0 .5.2t.2.5v32.9q0 .4-.4.6l-10.7 5.7q-.1.1-.3.1-.3 0-.5-.2t-.2-.5V6.4q0-.4.3-.6L39 .1q.1-.1.3-.1zm-25 0q.2 0 .3.1L26 5.8q.4.2.4.6v32.9q0 .3-.2.5t-.5.2q-.2 0-.3-.1L14 34.2q-.4-.2-.4-.6V.7q0-.3.2-.5t.5-.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMap;
