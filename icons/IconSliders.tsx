
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconSliders extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--sliders ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M10.9 31.4v2.9H3v-2.9h7.9zm7.8-2.8q.6 0 1 .4t.4 1v5.7q0 .6-.4 1t-1 .4H13q-.6 0-1-.4t-.4-1V30q0-.6.4-1t1-.4h5.7zm3.6-8.6v2.9H3V20h19.3zM8 8.6v2.8H3V8.6h5zm29.3 22.8v2.9H20.9v-2.9h16.4zM15.9 5.7q.5 0 1 .4t.4 1v5.8q0 .5-.4 1t-1 .4h-5.8q-.5 0-1-.4t-.4-1V7.1q0-.5.4-1t1-.4h5.8zm14.2 11.4q.6 0 1 .5t.5 1v5.7q0 .6-.5 1t-1 .4h-5.7q-.5 0-1-.4t-.4-1v-5.7q0-.6.4-1t1-.5h5.7zm7.2 2.9v2.9h-5V20h5zm0-11.4v2.8H18V8.6h19.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSliders;
