
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

class IconUsb extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--usb ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M40.1 18.4q.2.1.2.5t-.2.5l-5.6 3.3q-.2.1-.3.1-.2 0-.3-.1-.3-.1-.3-.5V20h-15q.6 1 1.4 2.9l.5 1 .4.8q.2.4.5.8t.4.6.6.5.6.1h1.7V25q0-.2.1-.4t.4-.1h5.6q.3 0 .4.1t.2.4v5.6q0 .3-.2.4t-.4.2h-5.6q-.2 0-.4-.2t-.1-.4V29H23q-.6 0-1.1-.2t-.9-.4-.8-.7-.6-.8-.6-1-.5-1-.5-1.1q-.4-.9-.6-1.4t-.7-1.2-.8-.9-.8-.3H8.8q-.4 1.5-1.6 2.4t-2.7 1q-1.9 0-3.2-1.3T0 18.9t1.3-3.2 3.2-1.3q1.5 0 2.7.9t1.6 2.5h1.8q.5 0 .9-.3t.7-1 .7-1.1.6-1.4q.3-.8.5-1.1t.5-1 .6-1 .6-.8.8-.7.9-.4 1.1-.2h1.9q.3-1 1.2-1.6t1.9-.6q1.4 0 2.4.9t1 2.4-1 2.4-2.4 1q-1.1 0-1.9-.6T20.4 11h-1.9q-.3 0-.6.2t-.5.4-.5.6-.5.9-.4.8-.4 1q-.8 1.8-1.5 2.9h19.5v-2.3q0-.3.3-.5t.6 0z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUsb;
