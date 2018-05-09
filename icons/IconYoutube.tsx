
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconYoutube extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--youtube ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M24.7 27.8v4.7q0 1.5-.9 1.5-.5 0-1-.5v-6.7q.5-.5 1-.5.9 0 .9 1.5zm7.5 0v1h-2v-1q0-1.5 1-1.5t1 1.5zm-21.5-4.9H13v-2.1H6.1v2.1h2.3v12.7h2.3V22.9zm6.4 12.7h2v-11h-2V33q-.7 1-1.3 1-.4 0-.5-.5v-8.9h-2v8.7q0 1.1.2 1.7.3.8 1.3.8 1.1 0 2.3-1.4v1.2zm9.6-3.3v-4.4q0-1.6-.2-2.2-.4-1.2-1.6-1.2-1.1 0-2.1 1.2v-4.9h-2v14.8h2v-1q1 1.2 2.1 1.2 1.2 0 1.6-1.2.2-.6.2-2.3zm7.5-.2v-.3h-2q0 1.1-.1 1.4-.1.8-.9.8-1 0-1-1.6v-1.9h4v-2.3q0-1.8-.6-2.6-.9-1.1-2.4-1.1t-2.4 1.1q-.6.8-.6 2.6v3.9q0 1.7.7 2.5.8 1.2 2.4 1.2 1.6 0 2.4-1.2.4-.6.5-1.2v-1.3zM20.6 11.7V7q0-1.5-.9-1.5t-1 1.5v4.7q0 1.6 1 1.6t.9-1.6zm16.1 16.8q0 5.2-.6 7.8-.3 1.3-1.3 2.2t-2.3 1q-4.1.5-12.4.5t-12.3-.5q-1.3-.1-2.3-1t-1.3-2.2q-.6-2.5-.6-7.8 0-5.2.6-7.8.3-1.3 1.3-2.2t2.3-1.1q4.1-.4 12.3-.4t12.4.4q1.3.2 2.3 1.1t1.3 2.2q.6 2.5.6 7.8zM14.4 0h2.3L14 8.9V15h-2.2V8.9q-.4-1.6-1.4-4.7Q9.6 1.9 8.9 0h2.4l1.6 5.9zm8.3 7.4v3.9q0 1.8-.7 2.7-.8 1.1-2.3 1.1-1.5 0-2.4-1.1-.6-.9-.6-2.7V7.4q0-1.8.6-2.6.9-1.1 2.4-1.1T22 4.8q.7.8.7 2.6zm7.4-3.6V15h-2v-1.3q-1.2 1.4-2.3 1.4-1 0-1.3-.8-.2-.5-.2-1.7V3.8h2V12q0 .7.1.8 0 .5.4.5.6 0 1.3-1V3.8h2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconYoutube;
