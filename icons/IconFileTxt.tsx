
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

class IconFileTxt extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--file-txt ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z"></path><path d="M19.091 27.638v1.715h1.99v1.381h-1.99v2.563q0 .42.168.572.167.145.663.145h.993v1.381h-1.656q-1.144 0-1.624-.474-.475-.48-.475-1.624v-2.563h-.96v-1.38h.96v-1.716h1.931zm4.704 4.666l-2.179-2.95h2.045l1.235 1.79 1.251-1.79h2.045l-2.18 2.94 2.288 3.101h-2.045l-1.36-1.91-1.342 1.91h-2.045l2.287-3.09zm7.704-4.666v1.715h1.99v1.381H31.5v2.563q0 .42.167.572.167.145.663.145h.993v1.381h-1.656q-1.144 0-1.624-.474-.475-.48-.475-1.624v-2.563h-.96v-1.38h.96v-1.716H31.5z" style={{"lineHeight":"125%","textAlign":"end"}} font-weight="400" font-size="58.922" font-family="sans-serif" letter-spacing="0" word-spacing="0" text-anchor="end"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFileTxt;
