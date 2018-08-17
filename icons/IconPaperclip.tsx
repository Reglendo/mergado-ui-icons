
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

class IconPaperclip extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--paperclip ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 30.9q0 2.6-1.7 4.4t-4.4 1.8q-3 0-5.2-2.3L7.1 17.5q-2.5-2.6-2.5-6.1 0-3.5 2.4-6t6-2.5q3.6 0 6.1 2.6L32.6 19q.3.2.3.5t-.7 1-1.1.7q-.2 0-.5-.2L17.1 7.4q-1.8-1.7-4-1.7-2.4 0-4 1.7t-1.7 4q0 2.4 1.7 4.1l17.4 17.3q1.4 1.4 3.2 1.4 1.4 0 2.4-.9t.9-2.4q0-1.8-1.4-3.2l-13-13q-.6-.5-1.3-.5-.7 0-1.1.4t-.4 1.1q0 .7.6 1.3l9.1 9.1q.2.3.2.5 0 .4-.7 1.1t-1 .7q-.3 0-.5-.3L14.3 19q-1.4-1.4-1.4-3.3t1.3-3.1 3.1-1.3q2 0 3.3 1.4l13 13q2.2 2.2 2.2 5.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconPaperclip;
