
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

class IconAngleDoubleRight extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--angle-double-right ${p.addClass} ${p.className}`
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
                        <g><path d="M22.3 21.4q0 .3-.2.5L11.7 32.3q-.3.3-.6.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.3-.2.5-.2t.6.2l10.4 10.4q.2.2.2.5zm8.6 0q0 .3-.3.5L20.2 32.3q-.2.3-.5.3t-.5-.3l-1.1-1.1q-.2-.2-.2-.5t.2-.5l8.8-8.8-8.8-8.7q-.2-.3-.2-.6t.2-.5l1.1-1.1q.2-.2.5-.2t.5.2l10.4 10.4q.3.2.3.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAngleDoubleRight;
