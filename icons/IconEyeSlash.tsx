
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

class IconEyeSlash extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--eye-slash ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M12.4 29.8l1.7-3.1q-1.9-1.5-3-3.6T10 18.6q0-2.7 1.4-5-5.2 2.6-8.5 7.8 3.7 5.8 9.5 8.4zm8.7-16.9q0-.5-.3-.8t-.8-.3q-2.8 0-4.8 2t-2 4.8q0 .4.3.7t.8.3.7-.3.4-.7q0-1.9 1.3-3.3t3.3-1.4q.4 0 .8-.3t.3-.7zm8.1-4.3v.2q-2.4 4.2-7.1 12.6t-7 12.7l-1.1 2q-.2.3-.7.3-.2 0-2.9-1.5-.4-.3-.4-.7 0-.2 1-1.9-3.2-1.5-5.9-3.9T.4 23q-.4-.7-.4-1.6t.4-1.5q3.5-5.3 8.5-8.3t11.1-3q2 0 4 .4l1.2-2.2q.2-.4.6-.4.2 0 .4.2t.7.3.8.4.7.4.4.3q.4.2.4.6zm.8 10q0 3.1-1.8 5.6t-4.6 3.7l6.2-11.2q.2 1 .2 1.9zm10 2.8q0 .8-.4 1.6-.9 1.4-2.5 3.2-3.3 3.8-7.7 6T20 34.3l1.7-3q4.7-.4 8.7-3t6.7-6.9q-2.5-4-6.3-6.5l1.5-2.5q2.1 1.4 4 3.4t3.3 4.1q.4.7.4 1.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconEyeSlash;
