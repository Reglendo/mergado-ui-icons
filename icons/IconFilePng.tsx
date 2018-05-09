
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

class IconFilePng extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--file-png ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 8.5c.4.4.733.967 1 1.7s.433 1.367.5 1.9v25.8c0 .533-.2 1.033-.6 1.5-.4.467-.933.667-1.6.6h-30c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5V2.1c0-.533.2-1.033.6-1.5.4-.467.9-.667 1.5-.6h20c.6 0 1.267.133 2 .4.733.267 1.3.633 1.7 1.1zM25.9 3v8.4h8.4c-.2-.4-.367-.7-.5-.9l-7-7c-.2-.133-.5-.3-.9-.5zm8.5 34.1V14.3h-9.3c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.933-.6-1.6V2.9H5.9v34.2z"></path><path d="M9.4 32.144v3.836H7.063V25.894h2.335v1.07q.483-.64 1.07-.94.588-.307 1.35-.307 1.351 0 2.22 1.077.867 1.07.867 2.76 0 1.69-.868 2.766-.868 1.07-2.218 1.07-.763 0-1.35-.3-.588-.307-1.07-.946zm1.552-4.73q-.75 0-1.155.554-.398.548-.398 1.586 0 1.037.398 1.592.405.548 1.155.548t1.142-.548q.398-.548.398-1.592t-.398-1.592q-.392-.548-1.142-.548zm13.036 1.337v4.45h-2.349v-3.406q0-.946-.046-1.305-.039-.359-.143-.528-.137-.229-.372-.352-.235-.131-.535-.131-.73 0-1.148.568-.418.56-.418 1.559v3.595h-2.336v-7.307h2.336v1.07q.529-.64 1.122-.94.594-.307 1.312-.307 1.266 0 1.918.777.659.776.659 2.257zm7.151 3.21q-.483.64-1.064.94-.58.3-1.344.3-1.337 0-2.212-1.05-.874-1.057-.874-2.689 0-1.637.874-2.681.875-1.05 2.212-1.05.764 0 1.344.3.58.3 1.064.946v-1.083h2.349v6.57q0 1.761-1.116 2.688-1.11.933-3.223.933-.685 0-1.325-.105-.64-.104-1.285-.32v-1.82q.613.353 1.2.522.588.176 1.181.176 1.149 0 1.684-.502.535-.502.535-1.572v-.503zm-1.54-4.547q-.724 0-1.129.535-.404.535-.404 1.513 0 1.005.391 1.527.392.516 1.142.516.73 0 1.135-.535t.405-1.508q0-.978-.405-1.513-.404-.535-1.135-.535z" style={{"lineHeight":"125%","textAlign":"end"}} font-weight="400" font-size="58.922" font-family="sans-serif" letter-spacing="0" word-spacing="0" text-anchor="end"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFilePng;
