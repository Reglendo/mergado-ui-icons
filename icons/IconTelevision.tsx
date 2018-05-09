
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

class IconTelevision extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--television ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.2 27.3V7.4q0-.3-.2-.5t-.5-.2H3.3q-.2 0-.4.2t-.2.5v19.9q0 .3.2.5t.4.2h33.2q.3 0 .5-.2t.2-.5zm2.7-19.9v19.9q0 1.4-1 2.4t-2.4.9H21.3v2.7h7.3q.3 0 .4.2t.2.5v1.3q0 .3-.2.5t-.4.1H11.3q-.3 0-.5-.1t-.2-.5V34q0-.3.2-.5t.5-.2h7.3v-2.7H3.3q-1.3 0-2.3-.9t-1-2.4V7.4Q0 6 1 5t2.3-.9h33.2q1.4 0 2.4.9t1 2.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTelevision;
