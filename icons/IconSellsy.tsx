
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

class IconSellsy extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--sellsy ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M29.1 29.2V15q0-.4-.3-.7t-.7-.3h-1.8q-.3 0-.6.3t-.3.7v14.2q0 .4.3.7t.6.3h1.8q.4 0 .7-.3t.3-.7zm-5.5 0V18.9q0-.4-.3-.7t-.7-.3h-1.9q-.4 0-.7.3t-.3.7v10.3q0 .4.3.7t.7.3h1.9q.4 0 .7-.3t.3-.7zm-5.7 0v-8.3q0-.4-.3-.7t-.6-.3h-2q-.4 0-.7.3t-.3.7v8.3q0 .4.3.7t.7.3h2q.4 0 .6-.3t.3-.7zm-5.6 0v-7q0-.4-.3-.7t-.7-.3h-2q-.4 0-.6.3t-.3.7v7q0 .4.3.7t.6.3h2q.4 0 .7-.3t.3-.7zm27.5-2.8q0 3.2-2.3 5.5t-5.6 2.3H7.8q-3.2 0-5.5-2.3T0 26.4q0-2.3 1.2-4.2t3.3-2.9q-.2-.6-.2-1.4 0-2.2 1.6-3.7t3.7-1.6q2 0 3.5 1.3.9-3.5 3.8-5.8t6.5-2.3q2.9 0 5.4 1.4t3.8 3.9 1.5 5.3q0 1.3-.3 2.4 2.6.7 4.3 2.8t1.7 4.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSellsy;
