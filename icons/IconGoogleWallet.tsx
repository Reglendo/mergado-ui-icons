
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

class IconGoogleWallet extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--google-wallet ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M9.6 15.1q.7 0 1.1.6 5.8 7.9 7.9 16.8H8.9q-2.8-9.6-8-16.3-.2-.3-.1-.7t.7-.4h8.1zm12.2 7.8q-1.1 4.3-2.7 8.6-1.8-6.8-5.6-13 .9-4.8.9-9.8 4.6 7.4 7.4 14.2zm2.1-15.4q5.2 7 8.4 15.2t4 16.8h-9.8q-.9-14.5-12-32h9.4zM39 20q0 9.2-2.2 17.7-1.4-12.2-7.8-23.6-.5-6.6-2.3-12.7-.1-.4.1-.6t.6-.3h7.8q.5 0 .8.3t.5.7Q39 10.4 39 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGoogleWallet;
