
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

class IconCommenting extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--commenting ${p.addClass} ${p.className}`
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
                        <g><path d="M14.3 20q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .9 2-.9.9-2zm8.6 0q0-1.2-.9-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.9-2zm8.5 0q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .9 2-.9.8-2zm8.6 0q0 3.9-2.7 7.2T30 32.4t-10 1.9q-2.5 0-4.7-.4-3.9 3.8-9.7 5.1-1.2.2-1.9.3-.3 0-.5-.1t-.3-.4q-.1-.4.4-.9l.5-.5q.4-.4.6-.5t.5-.5.6-.8.4-.8.5-1 .3-1.3.3-1.6Q3.7 28.8 1.9 26T0 20q0-3.9 2.7-7.2T10 7.6t10-1.9 10 1.9 7.3 5.2T40 20z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCommenting;
