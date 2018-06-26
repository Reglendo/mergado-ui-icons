
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

class IconTable extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--table ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M12.9 30.7v-4.3q0-.3-.2-.5t-.5-.2H5.1q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.1q.3 0 .5-.2t.2-.5zm0-8.6v-4.2q0-.4-.2-.6t-.5-.2H5.1q-.3 0-.5.2t-.2.6v4.2q0 .4.2.6t.5.2h7.1q.3 0 .5-.2t.2-.6zm11.5 8.6v-4.3q0-.3-.2-.5t-.6-.2h-7.1q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.1q.4 0 .6-.2t.2-.5zM12.9 13.6V9.3q0-.3-.2-.5t-.5-.2H5.1q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.1q.3 0 .5-.2t.2-.5zm11.5 8.5v-4.2q0-.4-.2-.6t-.6-.2h-7.1q-.3 0-.5.2t-.2.6v4.2q0 .4.2.6t.5.2h7.1q.4 0 .6-.2t.2-.6zm11.4 8.6v-4.3q0-.3-.2-.5t-.5-.2h-7.2q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.2q.3 0 .5-.2t.2-.5zM24.4 13.6V9.3q0-.3-.2-.5t-.6-.2h-7.1q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.1q.4 0 .6-.2t.2-.5zm11.4 8.5v-4.2q0-.4-.2-.6t-.5-.2h-7.2q-.3 0-.5.2t-.2.6v4.2q0 .4.2.6t.5.2h7.2q.3 0 .5-.2t.2-.6zm0-8.5V9.3q0-.3-.2-.5t-.5-.2h-7.2q-.3 0-.5.2t-.2.5v4.3q0 .3.2.5t.5.2h7.2q.3 0 .5-.2t.2-.5zm2.8-7.2v24.3q0 1.5-1 2.5t-2.5 1.1h-30q-1.5 0-2.5-1.1t-1.1-2.5V6.4q0-1.4 1-2.5t2.6-1h30q1.4 0 2.5 1t1 2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTable;
