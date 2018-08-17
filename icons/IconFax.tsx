
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

class IconFax extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--fax ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M6.4 8.6q1.5 0 2.5 1t1.1 2.5v24.3q0 1.5-1.1 2.5T6.4 40H3.6q-1.5 0-2.5-1T0 36.4V12.1q0-1.4 1.1-2.5t2.5-1h2.8zm30.7 3.6q1.3.8 2.1 2.1t.8 2.8v17.2q0 2.4-1.7 4t-4 1.7H15q-1.5 0-2.5-1t-1.1-2.6V2.1q0-.9.7-1.5t1.5-.6h15q.9 0 1.9.4t1.7 1.1l3.4 3.4q.7.6 1.1 1.7t.4 2v3.6zM20.7 34.3v-2.9q0-.3-.2-.5t-.5-.2h-2.9q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2H20q.3 0 .5-.2t.2-.5zm0-5.7v-2.9q0-.3-.2-.5T20 25h-2.9q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2H20q.3 0 .5-.2t.2-.5zm0-5.7V20q0-.3-.2-.5t-.5-.2h-2.9q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2H20q.3 0 .5-.2t.2-.5zm5.7 11.4v-2.9q0-.3-.2-.5t-.5-.2h-2.8q-.4 0-.6.2t-.2.5v2.9q0 .3.2.5t.6.2h2.8q.3 0 .5-.2t.2-.5zm0-5.7v-2.9q0-.3-.2-.5t-.5-.2h-2.8q-.4 0-.6.2t-.2.5v2.9q0 .3.2.5t.6.2h2.8q.3 0 .5-.2t.2-.5zm0-5.7V20q0-.3-.2-.5t-.5-.2h-2.8q-.4 0-.6.2t-.2.5v2.9q0 .3.2.5t.6.2h2.8q.3 0 .5-.2t.2-.5zm5.7 11.4v-2.9q0-.3-.2-.5t-.5-.2h-2.8q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2h2.8q.3 0 .5-.2t.2-.5zm0-5.7v-2.9q0-.3-.2-.5t-.5-.2h-2.8q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2h2.8q.3 0 .5-.2t.2-.5zm0-5.7V20q0-.3-.2-.5t-.5-.2h-2.8q-.3 0-.5.2t-.2.5v2.9q0 .3.2.5t.5.2h2.8q.3 0 .5-.2t.2-.5zm2.2-8.6V8.6h-3.6q-.9 0-1.5-.7t-.6-1.5V2.9H14.3v11.4h20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFax;
