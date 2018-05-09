
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

class IconBookmarkO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--bookmark-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M31.2 5.7H8.4v27.7l11.4-10.9 2 1.9 9.4 9V5.7zm.3-2.8q.5 0 1 .2.7.2 1.1.9t.5 1.4v28.7q0 .8-.5 1.4t-1.1.9q-.5.2-1 .2-1.1 0-1.9-.7l-9.8-9.5-9.9 9.5q-.8.7-1.8.7-.5 0-1-.2-.7-.3-1.2-.9t-.4-1.4V5.4q0-.8.4-1.4t1.2-.9q.5-.2 1-.2h23.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBookmarkO;
