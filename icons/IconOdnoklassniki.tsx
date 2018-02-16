
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

class IconOdnoklassniki extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--odnoklassniki ${p.addClass} ${p.className}`
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
                        <g><path d="M19.8 20.2q-4.2 0-7.2-2.9t-2.9-7.2q0-4.2 2.9-7.1t7.2-3 7.1 3 3 7.1q0 4.2-3 7.2t-7.1 2.9zm0-15.1q-2.1 0-3.5 1.5t-1.5 3.5q0 2.1 1.5 3.5t3.5 1.5 3.5-1.5 1.5-3.5q0-2-1.5-3.5t-3.5-1.5zm11.7 16.4q.3.6.3 1.1t-.1.9-.6.8-.9.9-1.4.9q-2.6 1.6-7 2.1l1.6 1.6 5.9 6q.7.7.7 1.6t-.7 1.6l-.2.3q-.7.7-1.7.7t-1.6-.7l-6-6-6 6q-.6.7-1.6.7t-1.6-.7l-.3-.3q-.7-.6-.7-1.6t.7-1.6l7.6-7.6q-4.6-.5-7.1-2.1-.9-.6-1.4-.9t-.9-.9-.6-.8-.1-.9.3-1.1q.2-.5.6-.8t1-.5 1.2 0 1.5.8l.3.3q.2.2 1 .5t1.5.7 2.1.5 2.5.3q2 0 3.9-.6t2.6-1.1l.9-.6q.7-.5 1.4-.8t1.3 0 .9.5.7.8z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconOdnoklassniki;
