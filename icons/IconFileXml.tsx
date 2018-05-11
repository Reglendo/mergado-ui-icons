
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

class IconFileXml extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--file-xml ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z"></path><path d="M9.979 31.69l-2.613-3.536h2.451l1.48 2.146 1.5-2.146h2.451l-2.612 3.523 2.742 3.718h-2.451l-1.63-2.289-1.61 2.29h-2.45L9.98 31.69zm13.416-2.334q.44-.672 1.041-1.021.608-.356 1.332-.356 1.248 0 1.901.77.653.769.653 2.237v4.41h-2.327v-3.777q.006-.084.006-.174.006-.09.006-.259 0-.77-.226-1.112-.226-.35-.73-.35-.66 0-1.022.544-.356.543-.369 1.571v3.556h-2.327V31.62q0-1.202-.207-1.545-.207-.35-.737-.35-.666 0-1.028.55-.363.543-.363 1.559v3.562h-2.327v-7.241h2.327v1.06q.427-.614.977-.925.556-.31 1.222-.31.75 0 1.325.362.576.362.873 1.015zm7.1-4.022h2.315v10.061h-2.315v-10.06z" style={{"lineHeight":"125%","textAlign":"end"}} font-weight="400" font-size="58.922" font-family="sans-serif" letter-spacing="0" word-spacing="0" text-anchor="end"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFileXml;
