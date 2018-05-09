
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

class IconStickyNoteO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--sticky-note-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.3 28.6h-5.6v5.5q.7-.2.9-.5l4.2-4.1q.2-.3.4-.9zM28 25.7h6.4v-20H5.9v28.6h20v-6.4q0-.9.6-1.6t1.5-.6zM37.3 5v22.9q0 .9-.5 1.9t-1 1.7l-4.1 4.1q-.7.7-1.7 1.1t-2 .4H5.1q-.8 0-1.5-.6T3 35V5q0-.9.6-1.5t1.5-.6h30q.9 0 1.6.6t.6 1.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconStickyNoteO;
