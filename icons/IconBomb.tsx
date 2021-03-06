
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

class IconBomb extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--bomb ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M12.7 13.1q-.2-.5-.7-.7t-1.1 0q-2.4.9-4.3 2.8t-2.8 4.3q-.2.5 0 1.1t.8.7q.3.1.5.1 1 0 1.4-.9.7-1.8 2.2-3.3T12 15q.5-.2.7-.8t0-1.1zm21.1-7.9l1 1-5.4 5.5 1.5 1.5q.4.4.4 1t-.4 1l-1.5 1.4q2 3.6 2 7.7 0 3.2-1.2 6.1t-3.4 5-5 3.4-6.1 1.2-6.1-1.2-5-3.4-3.4-5T0 24.3t1.2-6.1 3.4-5 5-3.4 6.1-1.2q4.1 0 7.7 2l1.4-1.5q.4-.4 1-.4t1 .4l1.6 1.6zM34 4q-.3.2-.5.2-.3 0-.6-.2l-2-2.1q-.2-.2-.2-.5t.2-.5q.2-.2.5-.2t.5.2l2.1 2q.2.2.2.5t-.2.5zm5.1 5.1q-.3.2-.5.2t-.5-.2l-2.1-2q-.2-.2-.2-.5t.2-.5q.2-.3.6-.3t.5.3l2 2q.2.2.2.5t-.2.5zM40 5q0 .3-.2.5t-.5.2h-2.2q-.3 0-.5-.2t-.2-.5.2-.5.5-.2h2.2q.3 0 .5.2t.2.5zM35.7.7v2.2q0 .3-.2.5t-.5.2-.5-.2-.2-.5V.7q0-.3.2-.5T35 0t.5.2.2.5zm3.4 1.2l-2 2.1q-.3.2-.5.2-.3 0-.6-.2-.2-.2-.2-.5t.2-.6l2.1-2q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBomb;
