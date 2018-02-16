
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

class IconHeadphones extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--headphones ${p.addClass} ${p.className}`
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
                        <g><path d="M38.6 19.8q0 3.7-1.3 7l-.4 1.1-4.2.7q-.5 1.9-2 3.1t-3.5 1.2v.7q0 .3-.2.5t-.5.2h-1.4q-.3 0-.5-.2t-.2-.5V20.7q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5v.7q1.6 0 2.9.8t2.1 2.2l1.5-.3q.7-2.1.7-4.3 0-3.3-2-6.3t-5.3-4.6-7-1.8T13 8.9t-5.2 4.6-2 6.3q0 2.2.6 4.3l1.6.2q.7-1.3 2-2.1t2.9-.8v-.7q0-.3.2-.5t.5-.2h1.5q.3 0 .5.2t.2.5v12.9q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-.7q-1.9 0-3.5-1.2t-2-3.1l-4.1-.7-.5-1.1q-1.3-3.3-1.3-7 0-3.4 1.5-6.5t4-5.4 5.9-3.7 7.2-1.3 7.1 1.3 6 3.7 4 5.4 1.5 6.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHeadphones;
