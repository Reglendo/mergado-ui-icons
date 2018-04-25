
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

class IconEyedropper extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--eyedropper ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.9 2.1Q40 4.2 40 7.2t-2.1 5l-5 5 2.3 2.3q.2.2.2.5t-.2.5l-4.7 4.7q-.2.2-.5.2t-.5-.2l-2.4-2.3-13.4 13.4q-.8.8-2 .8H7.1L1.4 40 0 38.6l2.9-5.7v-4.6q0-1.2.8-2l13.4-13.4-2.3-2.4q-.2-.2-.2-.5t.2-.5l4.7-4.7q.2-.2.5-.2t.5.2l2.3 2.3 5-5q2.1-2.1 5-2.1t5.1 2.1zM11.4 32.9L24.3 20 20 15.7 7.1 28.6v4.3h4.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconEyedropper;
