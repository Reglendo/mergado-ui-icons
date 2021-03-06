
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

class IconThumbsOUp extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--thumbs-o-up ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M8.7 30q0-.6-.4-1t-1-.4-1 .4-.4 1 .4 1 1 .4 1-.4.4-1zm25.7-12.9q0-1.1-.8-2t-2-.8h-7.9q0-1.3 1.1-3.6t1.1-3.6q0-2.1-.8-3.2t-2.8-1q-.6.5-.9 1.9t-.6 2.8-1.4 2.4q-.5.5-1.7 2-.1.1-.5.7t-.7.9-.8 1-.9.9-.8.8-.9.6-.8.2h-.7v14.3h.7q.3 0 .7.1t.7.1.9.3.8.2.7.3.7.3q4.7 1.6 7.6 1.6h2.7q4.3 0 4.3-3.7 0-.6-.1-1.3.7-.3 1.1-1.2t.4-1.6-.4-1.5q1.1-1.2 1.1-2.7 0-.6-.2-1.2t-.5-1.1q.7 0 1.1-1t.5-1.9zm2.9 0q0 2-1.1 3.7.2.7.2 1.5 0 1.7-.9 3.2.1.5.1 1 0 2.2-1.3 3.9 0 3.2-1.9 4.9t-5.1 1.8h-2.9q-2.1 0-4.2-.5t-4.8-1.4q-2.6-.9-3.1-.9H5.9q-1.2 0-2.1-.8T3 31.4V17.1q0-1.1.8-2t2.1-.8H12q.8-.6 3-3.5 1.3-1.6 2.4-2.8.6-.6.8-1.9t.7-2.9T20.3.8q.8-.8 2-.8 1.9 0 3.4.7T27.9 3t.8 4.1q0 2.1-1.1 4.3h4q2.3 0 4 1.7t1.7 4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconThumbsOUp;
