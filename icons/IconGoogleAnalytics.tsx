
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

class IconGoogleAnalytics extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--google-analytics ${p.className || ""}`
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
                        <g className={`m-group`}><g transform="translate(0 -286.417)"><rect width="23.347" height="26.465" x="13.333" y="299.952" rx="4.696" fill="#ffc107"></rect><rect width="23.258" height="12.929" y="313.488" rx="2.741" fill="#ffc107"></rect><path d="M29.347 286.417c-1.486 0-2.68 1.17-2.68 2.624v37.376h10.65c1.486 0 2.683-1.172 2.683-2.627v-34.749c0-1.455-1.197-2.624-2.682-2.624z" fill="#f57c00"></path></g></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGoogleAnalytics;