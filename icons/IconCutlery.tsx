
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

class IconCutlery extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--cutlery ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M18.8 1.4v14.3q0 1.4-.8 2.5t-2.1 1.6v17.3q0 1.2-.8 2.1t-2 .8h-2.9q-1.1 0-2-.8t-.8-2.1V19.8q-1.3-.5-2.1-1.6t-.8-2.5V1.4q0-.6.4-1t1-.4 1 .4.5 1v9.3q0 .6.4 1t1 .4 1-.4.4-1V1.4q0-.6.4-1t1-.4 1 .4.5 1v9.3q0 .6.4 1t1 .4 1-.4.4-1V1.4q0-.6.4-1t1.1-.4 1 .4.4 1zm17.1 0v35.7q0 1.2-.8 2.1t-2 .8h-2.9q-1.1 0-2-.8t-.8-2.1V25.7h-5q-.3 0-.5-.2t-.3-.5V7.1q0-2.9 2.1-5T28.8 0h5.7q.6 0 1 .4t.4 1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCutlery;
