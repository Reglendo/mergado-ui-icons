
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

class IconDigg extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--digg ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M6.4 8.1h3.9v19.1H0V13.6h6.4V8.1zm0 15.9v-7.2H4V24h2.4zm5.5-10.4v13.6h4V13.6h-4zm0-5.5V12h4V8.1h-4zm5.6 5.5h10.3v18.3H17.5v-3.1h6.4v-1.6h-6.4V13.6zM23.9 24v-7.2h-2.4V24h2.4zm5.5-10.4h10.4v18.3H29.4v-3.1h6.4v-1.6h-6.4V13.6zM35.8 24v-7.2h-2.4V24h2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDigg;
