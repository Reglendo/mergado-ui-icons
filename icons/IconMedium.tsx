
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

class IconMedium extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--medium ${p.addClass} ${p.className}`
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
                        <g><path d="M13.3 9.4v26.2q0 .5-.3.9t-.8.4q-.3 0-.7-.2L1.1 31.5q-.5-.2-.8-.7t-.3-1V4.3q0-.4.2-.8t.7-.3q.3 0 1 .4l11.4 5.7v.1zm1.5 2.3L26.7 31l-11.9-6V11.7zm25.2.4v23.5q0 .5-.3.9t-.9.3-1-.3l-9.9-4.9zm-.1-2.7l-5.7 9.3q-5.7 9.3-6.7 10.9l-8.7-14.1L26 3.7q.4-.6 1.2-.6.3 0 .6.1l12 6q.1.1.1.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMedium;
