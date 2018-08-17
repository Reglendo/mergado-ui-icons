
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

class IconDrupal extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--drupal ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M29.1 35.4q-.2-.4-.6-.1-.7.5-1.9.9t-3 .3q-2.8 0-4.3-1.1h-.2q-.3 0-.6.2-.2.2-.2.4t.2.4q.7.7 1.9 1.1t2.3.2 2.2-.1q.9-.1 1.9-.4t1.5-.7.6-.5q.3-.2.1-.6zm-.9-2.6q-.4-1-.9-1.3-.5-.4-1.7-.4-1 0-1.6.3-.6.2-1.7 1.2-.6.5-.3 1 .2.2.4.1t.7-.5l.2-.2q.1-.1.3-.2t.2-.2.3-.1.2-.1.4-.1.3-.1.5 0q.6 0 1 .2t.5.3.3.5q.2.3.3.4t.3 0q.5-.3.3-.8zm7.9-6.2q0-.5-.1-1t-.4-1-.7-.8-1.2-.4q-.7 0-2.2 1t-2.9 1.8-2.2 1q-.6 0-1.4-.5t-1.7-1.1-1.9-1.2-2.2-1.1-2.5-.5q-2.6.1-4.4 1.8t-1.9 4q0 2.5 1.7 3.6.6.5 1.4.7t2.3.2q1.3 0 2.9-.8t3-1.6 2.7-1.5 2.1-.7q.6 0 1.4.7t1.6 1.5 1.6 1.5 1.2.7q.8.1 1.3-.3t1.2-1.4q.7-.9 1-2.3t.3-2.3zm1.2-3.6q0 3.7-1.4 6.8t-3.7 5.3-5.4 3.3-6.5 1.2-6.5-1.3-5.6-3.5-3.8-5.4T3 22.7q0-2 .4-3.9t1.1-3.2 1.6-2.7 1.8-2.1 1.7-1.5T11 8.2t1-.5q.3-.2 1.1-.6t1.2-.6 1.1-.7 1.4-1q.8-.6 1.3-1.6t.6-2.8q2.9 3.5 4.2 4.3 1 .7 2.9 1.5t2.9 1.5l.8.6q.4.3 1.4 1t1.7 1.6 1.7 2.1 1.5 2.7 1.1 3.3.4 4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDrupal;
