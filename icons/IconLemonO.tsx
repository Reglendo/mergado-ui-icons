
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

class IconLemonO extends React.Component<Props, {}> {
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
        const className = `muk-icon muk-icon--lemon-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.4 18.4q0-.9-.1-2.5t-.5-2.1q-.2-.7-.3-1t-.2-.8-.1-1.1q0-.5.1-1.6t.1-1.5q0-.8-.2-1.2h-.3q-.4 0-1.3.1t-1.3.1q-1.4 0-4-.5t-3.9-.6q-.9 0-2.1.3t-1.9.5-2 .8q-3 1.2-4.5 2.3-2.1 1.6-3.5 4.2t-2 5.3-.5 5.5q0 .9.2 2.7t.3 2.7q0 .5-.2 1.5t-.3 1.4.3.8.8.4q.5 0 1.6-.3t1.6-.2q1.3 0 3.8.3t3.8.4q4 0 6.3-.8 2.9-1 5.3-3.4t3.7-5.5 1.3-6.2zm2.9 0q0 3.7-1.6 7.3t-4.4 6.4-6.2 4.1q-2.8.9-7.3.9-1.3 0-3.8-.3t-3.8-.3q-.5 0-1.6.3t-1.6.3q-1.7 0-2.8-1.2T3.1 33q0-.5.2-1.5t.3-1.5q0-.9-.3-2.7T3 24.6q0-2.5.4-4.8t1.2-4.7 2.3-4.3 3.3-3.5Q12 6 15.4 4.6q4.3-1.7 7-1.7 1.4 0 4 .5t3.8.5q.5 0 1.3-.1t1.3-.1q1.8 0 2.6 1.1t.9 3q0 .5-.2 1.5t-.1 1.6q0 .2.1.4t0 .4.1.3.2.3.1.4q.4.9.6 2.6t.2 3.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLemonO;
