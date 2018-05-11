
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

class IconExchange extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--exchange ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M40 26.4v4.3q0 .3-.2.5t-.5.2H8.6v4.3q0 .3-.2.5t-.5.2q-.3 0-.6-.2L.2 29.1q-.2-.2-.2-.5t.2-.5l7.1-7.2q.2-.2.6-.2.2 0 .5.2t.2.5v4.3h30.7q.3 0 .5.2t.2.5zm0-12.1q0 .3-.2.5l-7.1 7.1q-.2.2-.6.2-.2 0-.5-.2t-.2-.5v-4.3H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30.7V7.1q0-.3.2-.5t.5-.2q.3 0 .6.3l7.1 7.1q.2.2.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconExchange;
