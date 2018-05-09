
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

class IconGit extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--git ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M13.3 33.8q0-2.2-3.7-2.2-3.5 0-3.5 2.3 0 2.2 3.8 2.2 3.4 0 3.4-2.3zM12 16.9q0-1.3-.7-2.2t-2-.9q-2.8 0-2.8 3.2 0 3 2.8 3 2.7 0 2.7-3.1zm6-7.2v4.5q-.8.3-1.8.5.4 1 .4 1.9 0 2.8-1.7 4.8t-4.4 2.5q-.9.2-1.3.6t-.4 1.3q0 .7.5 1.2t1.3.7 1.7.5 1.9.6 1.8.8 1.3 1.4.5 2.2q0 6.8-8.1 6.8-1.6 0-2.9-.3t-2.6-.9-2-1.8-.7-2.9q0-3.7 4.1-5V29q-1.5-.9-1.5-2.8 0-2.4 1.4-3v-.1q-1.6-.6-2.7-2.5t-1-3.7q0-3.1 2.1-5.1t5.2-2.1q2.2 0 4 1.1 2.2 0 4.9-1.1zm7.1 19.7h-5q.1-1 .1-3V12.8q0-2.1-.1-2.9h5q-.1.8-.1 2.8v13.7q0 2 .1 3zm13.4-5v4.4q-1.6.9-3.9.9-1.4 0-2.4-.5t-1.6-1.1-.8-1.7-.4-2.1-.1-2.3v-7.9h-.4q-.3 0-.4-.1-.5 0-1.3.2V9.9h2.1V8.2q0-1.2-.1-1.9h5q-.1.9-.1 3.6h3.8v4.3q-.3 0-.9-.1t-1 0h-1.9v8.1q0 3 1.9 3 1.4 0 2.5-.8zM25.6 3.3q0 1.3-.8 2.2t-2.2 1q-1.3 0-2.2-1t-.9-2.2q0-1.3.9-2.3t2.2-1q1.3 0 2.2 1t.8 2.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGit;
