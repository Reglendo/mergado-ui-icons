
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

class IconMedkit extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--medkit ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M28.6 25v-4.3q0-.3-.2-.5t-.5-.2h-5v-5q0-.3-.2-.5t-.6-.2h-4.2q-.4 0-.6.2t-.2.5v5h-5q-.3 0-.5.2t-.2.5V25q0 .3.2.5t.5.2h5v5q0 .3.2.5t.6.2h4.2q.4 0 .6-.2t.2-.5v-5h5q.3 0 .5-.2t.2-.5zM14.3 8.6h11.4V5.7H14.3v2.9zm-8.6 0v28.5H5q-2.1 0-3.5-1.4T0 32.1V13.6q0-2.1 1.5-3.6T5 8.6h.7zm26.4 0v28.5H7.9V8.6h3.5V5q0-.9.7-1.5t1.5-.6h12.8q.9 0 1.5.6t.7 1.5v3.6h3.5zm7.9 5v18.5q0 2.1-1.5 3.6T35 37.1h-.7V8.6h.7q2.1 0 3.5 1.4t1.5 3.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMedkit;
