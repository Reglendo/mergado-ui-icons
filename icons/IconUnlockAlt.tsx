
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

class IconUnlockAlt extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--unlock-alt ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M30.6 17.1q.9 0 1.5.7t.6 1.5v12.8q0 .9-.6 1.6t-1.5.6H9.1q-.8 0-1.5-.6T7 32.1V19.3q0-.9.6-1.5t1.5-.7h.8V10q0-4.1 2.9-7.1T19.9 0t7 2.9 3 7.1q0 .6-.5 1t-1 .4H27q-.6 0-1-.4t-.4-1q0-2.4-1.7-4t-4-1.7T15.8 6t-1.7 4v7.1h16.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUnlockAlt;
