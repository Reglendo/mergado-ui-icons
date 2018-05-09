
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

class IconTrain extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--train ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M27.3 0q4.1 0 7.1 2.1t2.9 5v20q0 2.9-2.8 5t-6.8 2.2l4.7 4.5q.4.3.2.8t-.7.4H8.4q-.5 0-.7-.4t.2-.8l4.7-4.5q-4-.2-6.8-2.2t-2.8-5v-20q0-2.9 2.9-5T13 0h14.3zm-7.2 30q1.8 0 3.1-1.2t1.2-3.1-1.2-3-3.1-1.3-3 1.3-1.2 3 1.2 3.1 3 1.2zM33 17.1V5.7H7.3v11.4H33z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTrain;
