
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

class IconDedent extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--dedent ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M8.6 12.1V25q0 .3-.2.5t-.5.2q-.4 0-.6-.2L.9 19.1q-.2-.2-.2-.5t.2-.5l6.4-6.5q.2-.2.6-.2.2 0 .5.2t.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDedent;
