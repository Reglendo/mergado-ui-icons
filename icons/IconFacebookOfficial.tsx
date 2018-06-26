
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

class IconFacebookOfficial extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--facebook-official ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.4 2.9q.8 0 1.3.5t.6 1.4v30.4q0 .8-.6 1.4t-1.3.5h-8.7V23.9h4.4l.7-5.2h-5.1v-3.3q0-1.3.5-1.9t2-.6h2.7V8.2Q30.5 8 28 8q-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2H4.9q-.8 0-1.3-.5T3 35.2V4.8q0-.8.6-1.4t1.3-.5h30.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFacebookOfficial;
