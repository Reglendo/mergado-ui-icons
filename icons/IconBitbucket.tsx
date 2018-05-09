
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

class IconBitbucket extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--bitbucket ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M22.7 19.2q.2 1.4-1.1 2.2t-2.5.2q-.9-.4-1.2-1.3t0-1.9 1.1-1.3q.8-.4 1.6-.2t1.5.8.6 1.5zm2.5-.5q-.3-2.4-2.6-3.7t-4.3-.2q-1.5.6-2.3 1.9t-.8 2.9q.1 2 1.8 3.5t3.7 1.2q2-.2 3.4-1.8t1.1-3.8zm5.3-12.1q-.4-.6-1.2-1T28 5.1t-1.6-.3q-6.5-1-12.7.1-.9.1-1.4.3t-1.3.4-1.1 1q.7.6 1.7 1t1.7.5 1.9.3q5.1.6 10 0 1.4-.2 2-.3t1.6-.5 1.7-1zm1.3 23.1q-.2.6-.4 1.7t-.3 1.9-.6 1.6-1.3 1.2q-1.9 1.1-4.2 1.6t-4.6.5-4.4-.4q-1.1-.2-1.9-.4t-1.7-.6-1.6-1-1.2-1.4q-.5-2.1-1.2-6.5l.1-.3.4-.2q5 3.3 11.3 3.3t11.3-3.3q.5.1.6.5t-.1 1-.2.8zm4-21.4q-.6 3.7-2.5 14.6-.1.7-.6 1.2t-.9.9-1.3.7q-5.6 2.8-13.6 2-5.5-.6-8.8-3.1-.3-.3-.5-.6t-.4-.8-.2-.8-.1-.8-.2-.8q-.2-1.1-.6-3.4t-.6-3.6-.5-3.3T4.5 7q.1-.6.4-1.1t.7-.8 1-.7 1-.5 1.1-.4q2.8-1 7-1.4 8.4-.9 15.1 1.1 3.4 1 4.8 2.7.3.5.3 1.1t-.1 1.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBitbucket;
