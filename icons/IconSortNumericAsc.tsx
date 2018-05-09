
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

class IconSortNumericAsc extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--sort-numeric-asc ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M33 29.3q0-1.4-.9-2.6t-2.3-1.2q-1.2 0-1.9.9t-.7 2.1.8 2.1 2.4.8q1.1 0 1.9-.6t.7-1.5zm-13.6 2.8q0 .3-.2.6l-7.1 7.1q-.2.2-.5.2t-.5-.2l-7.2-7.1q-.3-.4-.1-.8.1-.5.6-.5h4.3V.7q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v30.7h4.3q.3 0 .5.2t.2.5zm16.8-1.5q0 1.4-.3 2.7t-.9 2.6-1.6 2.1-2.2 1.5-2.8.5q-1.4 0-2.4-.4-.5-.1-.9-.3l.8-2.5q.4.1.7.2.8.3 1.7.3 1.9 0 3-1.3t1.5-3.2h-.1q-.4.5-1.3.8t-1.9.3q-2.4 0-3.9-1.6t-1.5-3.8q0-2.4 1.6-4t4.1-1.6q2.7 0 4.5 2.1t1.9 5.6zm-.7-16v2.5H25v-2.5h3.8V3.8h-.1l-.1.3q-.2.3-.6.7L26.6 6l-1.8-1.9L29.1 0h2.7v14.6h3.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSortNumericAsc;
