
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

class IconBinoculars extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--binoculars ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M15.7 7.1v17.2q0 .6-.4 1t-1 .4v12.9q0 .5-.4 1t-1 .4H1.4q-.6 0-1-.4t-.4-1V27.1L5.6 7.7q.1-.6.7-.6h9.4zm7.2 0v15.8h-5.8V7.1h5.8zm17.1 20v11.5q0 .6-.4 1t-1 .4H27.1q-.5 0-1-.4t-.4-1V25.7q-.6 0-1-.4t-.4-1V7.1h9.5q.5 0 .6.6zM16.4.7v5H8.6v-5q0-.3.2-.5t.5-.2h6.4q.3 0 .5.2t.2.5zm15 0v5h-7.8v-5q0-.3.2-.5t.5-.2h6.4q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBinoculars;
