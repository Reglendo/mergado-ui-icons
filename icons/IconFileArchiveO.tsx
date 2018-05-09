
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconFileArchiveO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--file-archive-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M17.3 8.6V5.7h-2.9v2.9h2.9zm2.8 2.8V8.6h-2.8v2.8h2.8zm-2.8 2.9v-2.9h-2.9v2.9h2.9zm2.8 2.8v-2.8h-2.8v2.8h2.8zm15.7-8.6q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9h-2.9v2.8h-2.8V2.9H5.9v34.2h28.5zm-14-16l2.4 7.7q.2.6.2 1.2 0 1.9-1.6 3.1t-4.1 1.2-4.1-1.2-1.6-3.1q0-.6.2-1.2.4-1.4 2.6-8.8v-2.9h2.9V20H19q.5 0 .9.3t.5.8zm-3.1 10.3q1.2 0 2-.4t.8-1-.8-1-2-.4-2 .4-.9 1 .9 1 2 .4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFileArchiveO;
