
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

class IconSignal extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--signal ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M5.7 32.1v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm8.6-2.8v7.1q0 .3-.2.5t-.5.2H9.3q-.3 0-.5-.2t-.2-.5v-7.1q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zm8.6-5.7v12.8q0 .3-.2.5t-.6.2h-4.2q-.4 0-.6-.2t-.2-.5V23.6q0-.3.2-.5t.6-.2h4.2q.4 0 .6.2t.2.5zm8.5-8.6v21.4q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5zM40 3.6v32.8q0 .3-.2.5t-.5.2H35q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSignal;
