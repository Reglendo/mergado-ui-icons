
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconAndroid extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--android ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M15.5 10.8q.4 0 .6-.3t.3-.6-.3-.6-.6-.3-.6.3-.2.6.2.6.6.3zm9.4 0q.4 0 .6-.3t.3-.6-.3-.6-.6-.3-.6.3-.2.6.2.6.6.3zM6.8 14.9q.9 0 1.6.7t.7 1.6v9.6q0 .9-.7 1.6t-1.6.7-1.6-.7-.7-1.6v-9.6q0-1 .7-1.6t1.6-.7zm23.7.4v14.9q0 1-.8 1.7t-1.7.7h-1.6v5.1q0 1-.7 1.6t-1.6.7-1.7-.7-.6-1.6v-5.1h-3.1v5.1q0 1-.7 1.6t-1.6.7q-1 0-1.6-.7t-.7-1.6v-5.1h-1.7q-1 0-1.7-.7t-.7-1.7V15.3h20.5zm-5.2-9q2.4 1.2 3.8 3.4t1.4 4.8H9.9q0-2.6 1.4-4.8t3.8-3.4l-1.5-3q-.2-.2.1-.4.3-.1.4.1l1.6 3q2.1-1 4.5-1t4.5 1l1.6-3q.2-.2.5-.1.2.2.1.4zm10.6 10.9v9.6q0 .9-.6 1.6t-1.7.7q-.9 0-1.6-.7t-.6-1.6v-9.6q0-1 .6-1.7t1.6-.6q1 0 1.7.6t.6 1.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAndroid;
