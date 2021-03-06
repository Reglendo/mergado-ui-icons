
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

class IconLeanpub extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--leanpub ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M36.7 10.2l3.1 24.7q-2.6 0-5-1.1-3.9-1.8-7.7-1.8-4.4 0-7.2 2.9Q17 32 12.6 32 8.9 32 5 33.8 2.5 34.9.1 34.9H0l3-24.7q4.4-2.4 9.4-2.4 4.5 0 7.5 2 3-2 7.5-2 5 0 9.3 2.4zm-9.6 19.2q2.5 0 4.5.5t5.1 1.8l-2.4-19.8q-3.3-1.5-7.2-1.5-4.3 0-7.2 2.7-2.9-2.7-7.3-2.7-3.8 0-7.1 1.5L3.1 31.7q2-.8 3.2-1.2t2.9-.8 3.4-.3q3.9 0 7.3 2.1 3.3-2.1 7.2-2.1zm.8-.7l-1.1-17.6q-4.1.1-6.9 3-3-3-7.3-3-3.4 0-6.5 1.3L3.9 30.7q2.4-1 4.4-1.5t4.3-.5q4.1 0 7.3 2 3.3-2.1 7.2-2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLeanpub;
