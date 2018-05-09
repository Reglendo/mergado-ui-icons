
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

class IconHeurekaSmall extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--heureka-small ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M7.498 17.11c0-6.778 5.513-12.292 12.291-12.292 2.477 0 4.783.739 6.714 2.005l-7.068 11.35-2.913-3.848a2.275 2.275 0 0 0-1.826-.907 2.29 2.29 0 0 0-1.823 3.67l4.921 6.5a2.306 2.306 0 0 0 1.824.906c.036 0 .07 0 .105-.003a2.283 2.283 0 0 0 1.838-1.076l8.304-13.333a12.216 12.216 0 0 1 2.216 7.027c0 6.779-5.514 12.293-12.292 12.293S7.498 23.888 7.498 17.11m31.44 17.85l-6.424-6.427.008-.007a17.042 17.042 0 0 0 4.377-11.416C36.9 7.675 29.224 0 19.79 0 10.355 0 2.68 7.675 2.68 17.109c0 9.436 7.675 17.11 17.11 17.11 2.906 0 5.636-.738 8.034-2.021l6.937 6.938a2.958 2.958 0 0 0 4.18 0 2.957 2.957 0 0 0-.001-4.178" fill="#ff7b00"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHeurekaSmall;
