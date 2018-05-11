
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

class IconCcJcb extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--cc-jcb ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.2 21.8q0 .4-.3.8t-.7.4h-3v-2.4h3q.4.1.7.4t.3.8zm-.4-3.7q0 .4-.2.7t-.7.4h-2.7v-2.3h2.7q.4.1.7.4t.2.8zm-21.1 2.8v-5.4H8.8v5.4q0 1-.7 1.7t-1.8.6q-1.9 0-4.1-1v2q1 .2 2.2.4t1.9.1H7q5.7 0 5.7-3.8zm12.5 3.2v-1.9q-1.7.9-3.5 1-1.8.1-2.9-.7T17.7 20t1.1-2.5 2.9-.7q1.8.1 3.5 1v-1.9q-.8-.3-1.7-.4t-1.4-.2h-.5q-2.2-.1-3.8.3t-2.5 1-1.2 1.5-.4 1.9.4 1.9 1.2 1.5 2.5 1 3.8.3q1.8-.1 3.6-.6zm12.9-2q0-.9-.8-1.5t-1.9-.7v-.1q1-.1 1.6-.7t.6-1.4q0-.9-.8-1.5t-1.8-.6q-.1 0-.2-.1t-.3 0h-8v9h8.6q1.3 0 2.2-.7t.8-1.7zm2.2-13.3v22.4q0 .9-.6 1.6t-1.6.6H2.2q-.9 0-1.5-.6T0 31.2V8.8q0-.9.7-1.6t1.5-.6h35.9q.9 0 1.6.6t.6 1.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCcJcb;
