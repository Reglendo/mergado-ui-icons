
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

class IconBullseye extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--bullseye ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M25.9 20q0 2.4-1.7 4t-4.1 1.7-4-1.7-1.7-4 1.7-4 4-1.7 4.1 1.7 1.7 4zm2.8 0q0-3.6-2.5-6.1t-6.1-2.5-6 2.5-2.5 6.1 2.5 6.1 6 2.5 6.1-2.5 2.5-6.1zm2.9 0q0 4.7-3.4 8.1t-8.1 3.3-8-3.3T8.7 20t3.4-8.1 8-3.3 8.1 3.3 3.4 8.1zm2.8 0q0-2.9-1.1-5.5t-3.1-4.6-4.5-3.1-5.6-1.1-5.5 1.1T10 9.9t-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5zm2.9 0q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBullseye;
