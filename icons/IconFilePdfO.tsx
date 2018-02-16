
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconFilePdfO extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--file-pdf-o ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zM23 23.9q.7.6 1.8 1.3 1.3-.2 2.6-.2 3.3 0 4 1.1.4.5 0 1.2v.1q-.2.8-1.6.8-1.1 0-2.6-.4t-2.9-1.2q-4.9.5-8.7 1.8-3.4 5.9-5.4 5.9-.4 0-.7-.2l-.5-.2q0-.1-.1-.2-.3-.2-.2-.8.2-.8 1.3-2t2.9-2.1q.3-.2.5.1.1 0 .1.1 1.1-1.9 2.4-4.4 1.5-3.1 2.3-5.9-.5-1.8-.7-3.5t.2-2.9q.2-.9.9-.9h.5q.5 0 .8.4.4.4.2 1.5-.1.1-.1.2v.8q0 2.8-.3 4.3 1.2 3.7 3.3 5.3zm-12.9 9.2q1.2-.6 3.1-3.5-1.2.8-2 1.8t-1.1 1.7zM19 12.5q-.4 1-.1 3 .1-.2.2-1 0-.1.1-.9.1-.1.1-.2v-.1q0-.5-.3-.8zm-2.8 14.8q3-1.2 6.4-1.8-.1 0-.3-.2t-.4-.3q-1.7-1.5-2.8-4-.6 2-1.9 4.4-.7 1.3-1 1.9zm14.4-.4q-.5-.5-3.1-.5 1.7.6 2.8.6h.4l-.1-.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFilePdfO;
