
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

class IconCameraRetro extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--camera-retro ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M20.7 18.6q0-.3-.2-.5t-.5-.2q-1.5 0-2.5 1t-1.1 2.5q0 .3.2.5t.5.2.6-.2.2-.5q0-.9.6-1.5t1.5-.6q.3 0 .5-.2t.2-.5zm5 2.9q0 2.3-1.7 4t-4 1.7-4-1.7-1.7-4 1.7-4.1 4-1.6 4 1.6 1.7 4.1zM2.9 34.3h34.2v-2.9H2.9v2.9zm25.7-12.8q0-3.6-2.5-6.1T20 12.9t-6.1 2.5-2.5 6.1 2.5 6T20 30t6.1-2.5 2.5-6zM5.7 7.1h8.6V4.3H5.7v2.8zm-2.8 4.3h34.2V5.7H18.7l-1.5 2.9H2.9v2.8zM40 5.7v28.6q0 1.2-.8 2t-2.1.8H2.9q-1.2 0-2.1-.8t-.8-2V5.7q0-1.2.8-2t2.1-.8h34.2q1.2 0 2.1.8t.8 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCameraRetro;
