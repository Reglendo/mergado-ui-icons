
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

class IconHandSpockO extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--hand-spock-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M16.9 4.1q-1 0-1.6.7t-.7 1.7q0 .3.1.5l3.1 13h-.5l-2.4-10q-.2-.8-.9-1.3t-1.4-.5q-1 0-1.6.7t-.7 1.7q0 .2.1.6 0 .3.8 3.3t1.4 5.9.7 2.9V28l-6.4-4.8q-.7-.5-1.6-.5-1.1 0-1.9.7t-.7 1.9q0 1.3 1.1 2.2l10.5 7.9q.8.5 1.6.5h14.4q.7 0 1.3-.4t.7-1.1l2-8.3q.2-.6.3-1.8t.1-1.8l2.4-9.9q.1-.3.1-.6 0-.9-.7-1.6t-1.6-.7q-.8 0-1.5.5t-.8 1.3L30.5 20H30l2.7-11.4q.1-.3.1-.5 0-1-.7-1.7t-1.6-.7q-.8 0-1.4.5t-.9 1.3l-3 12.5h-2.6L19.2 5.8q-.2-.8-.8-1.3t-1.5-.4zm13.4 34.5H15.9q-1.7 0-3.2-1.1L2.2 29.7q-1-.8-1.6-2T0 25.3q0-2.2 1.6-3.8T5.3 20q.5 0 1 .1t.9.2.8.5.8.4.8.7.7.5L7.8 11.8q-.2-.7-.2-1.2 0-1.9 1.3-3.4T12 5.6q.3-1.8 1.7-3t3.2-1.2q1.8 0 3.1 1.1t1.8 2.7l2.1 8.9 1.7-7.2q.5-1.7 1.8-2.8t3.1-1q1.8 0 3.1 1.1t1.8 2.9q1.9.2 3.2 1.6t1.3 3.3q0 .7-.2 1.2l-2.4 9.9q-.1.5-.1 1.4 0 1.1-.3 2.2l-2.1 8.4q-.4 1.5-1.6 2.5t-2.9 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHandSpockO;
