
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

class IconDesktop extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--desktop ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.2 22V4.7q0-.3-.2-.4t-.5-.2H3.3q-.2 0-.4.2t-.2.4V22q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5zm2.7-17.3v22.6q0 1.4-1 2.4t-2.4.9H25.2q0 .8.4 1.6t.6 1.5.4.9q0 .6-.4 1t-1 .3H14.6q-.5 0-.9-.3t-.4-1q0-.3.3-.9t.7-1.5.3-1.6H3.3q-1.3 0-2.3-.9t-1-2.4V4.7q0-1.4 1-2.3t2.3-1h33.2q1.4 0 2.4 1t1 2.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDesktop;
