
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

class IconFortAwesome extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--fort-awesome ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M15.8 22.5v-5q0-.4-.4-.4h-2.1q-.4 0-.4.4v5q0 .4.4.4h2.1q.4 0 .4-.4zm11.4 0v-5q0-.4-.3-.4h-2.2q-.3 0-.3.4v5q0 .4.3.4h2.2q.3 0 .3-.4zm11.4.7V40H24.4v-7.1q0-1.8-1.3-3.1t-3-1.2-3.1 1.2-1.2 3.1V40H1.5V23.2q0-.3.4-.3H4q.4 0 .4.3v2.5h2.8V11.8q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h2.1q.4 0 .4.4v2.5h2.8v-2.5q0-.4.4-.4h.4V2.7q-.8-.5-.8-1.3 0-.6.5-1t1-.4 1 .4.4 1q0 .8-.7 1.3v.2h6.1q.3 0 .3.3v5q0 .4-.3.4h-6.1v2.8h.3q.4 0 .4.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v2.5h2.9v-2.5q0-.4.3-.4h2.2q.3 0 .3.4v13.9h2.9v-2.5q0-.3.3-.3h2.2q.3 0 .3.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFortAwesome;
