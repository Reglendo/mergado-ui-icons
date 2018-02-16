
import * as React from "react"
import shallowCompare from "shallow-compare"
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

class IconContao extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return shallowCompare(this,this.props,nextProps) }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--contao ${p.addClass} ${p.className}`
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
                        <g><path d="M3.1 2.9h4.4Q5.9 4.3 4.7 6.2q-.8 1.2-1.4 2.6t-.6 2.8-.2 2.6.2 3 .5 2.8.6 3l.1.7Q5.1 29 5.8 31q1.2 3.8 3.3 6.1h-6q-1.1 0-1.8-.7t-.8-1.8V5.4q0-1 .8-1.8t1.8-.7zm26.9 0h6.9q1.1 0 1.9.7t.7 1.8v29.2q0 1-.7 1.8t-1.9.7h-4q4.8-4.6 4.4-12.6l-10.4 2.3q-.1 1-.3 1.8t-.7 1.6-1.3 1.4-2.1.8q-2.8.5-4.5-.9-.7-.6-1.1-1.4t-1.2-2.9-1.4-5.7q-.8-3.7-1.1-5.9t-.1-3.1.5-1.7q.5-.9 1.4-1.6t2.3-1.1q1-.2 1.9-.1t1.5.4 1.2.8.9 1 .8 1.3l10.5-2.2Q32.5 5.4 30 2.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconContao;
