
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

class IconRepeat extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--repeat ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.3 5.7v10q0 .6-.4 1t-1 .4h-10q-1 0-1.4-.9-.3-.8.4-1.5l3-3.1q-3.3-3-7.8-3-2.3 0-4.4.9t-3.6 2.4-2.5 3.7-.9 4.4.9 4.4 2.5 3.7 3.6 2.4 4.4.9q2.7 0 5.1-1.1t4-3.3q.1-.2.5-.3.3 0 .5.2l3.1 3.1q.2.2.2.5t-.2.5q-2.4 2.9-5.9 4.5t-7.3 1.6q-3.4 0-6.6-1.3T8 32.1t-3.6-5.4T3 20t1.4-6.7T8 7.9t5.5-3.7 6.6-1.3q3.3 0 6.4 1.2T32 7.6l2.9-2.9q.6-.7 1.5-.3.9.4.9 1.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconRepeat;
