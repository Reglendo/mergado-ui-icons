
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconList extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--list ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M5.7 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2T0 25v-4.3q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zM5.7 3.6v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2H5q.3 0 .5.2t.2.5zM40 20.7V25q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h30q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5V3.6q0-.3.2-.5t.5-.2h30q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconList;
