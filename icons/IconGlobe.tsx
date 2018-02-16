
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

class IconGlobe extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--globe ${p.addClass} ${p.className}`
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
                        <g><path d="M20.1 2.9q4.7 0 8.6 2.3t6.3 6.2 2.3 8.6-2.3 8.6-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3zm6.2 11.6q-.1 0-.3.2t-.3.2q.1 0 .1-.1t.2-.2 0-.2q.2-.2.5-.3.3-.2 1.2-.3.7-.2 1.1.2l.2-.3q.2-.3.4-.2 0-.1.3-.1t.3-.2l.1-.5q-.3 0-.4-.1t-.2-.5l-.1.2q0-.2-.1-.2t-.3 0-.2 0q-.2 0-.3-.1t-.2-.4-.1-.3q0-.1-.2-.3t-.2-.2v-.1q0-.1-.1-.2t-.1-.1-.1 0-.2.1-.1.2-.1.1h-.3l-.1.1q-.1.1-.1 0 0 .1-.2.1t-.2.1q.4-.2 0-.3-.2-.1-.3-.1.2-.1.1-.2t-.2-.3h.1q0-.1-.1-.2t-.4-.2-.3-.2q-.2-.1-.8-.2t-.7 0q-.1.2-.1.3t.1.3 0 .2q.1.2-.1.3t-.1.3q0 .2.3.4t.2.4q-.1.2-.3.4t-.4.3q-.1.1 0 .4t.2.3v.2q0 .1-.2.1t-.1.1H23q-.2.2-.4-.1t-.3-.6q-.2-.5-.4-.6-.5-.2-.6 0-.2-.3-1-.6-.5-.2-1.3-.1.2 0 0-.3-.1-.4-.4-.3.1-.1.1-.4t0-.3q.1-.3.3-.5l.2-.2q.2-.2.2-.3t0-.1q.8.1 1.1-.3l.3-.3q.2-.2.2-.4.2-.2.3-.2t.3.2.4.1q.3 0 .3-.3t-.2-.4q.3 0 .1-.4l-.2-.2q-.2-.1-.6.1-.2.1.1.2-.1 0-.2.2t-.4.4-.4-.1l-.1-.3q-.1-.3-.2-.3-.2 0-.4.3.1-.1-.2-.3t-.5-.2q.4-.2-.2-.6-.2-.1-.5-.1t-.4.1q-.1.2-.1.3t.1.1.2.2.3.1.2 0q.3.2.1.3 0 .1-.2.1t-.2.1-.2.1v.6q-.1-.1-.2-.4t-.2-.3q.2.2-.5.1h-1q-.1 0-.3-.1-.1-.2 0-.5 0-.1 0 0 0-.1-.2-.2t-.2-.2q-1.1.3-2.1.9h.2q.2-.1.3-.2t.3-.1q.7-.3.9-.2l.1-.1q.3.4.4.6-.1-.1-.6 0t-.5.2q.1.3.1.4-.1 0-.3-.2t-.3-.2-.3-.1h-.5Q10 9.3 8 12.4q.2.2.3.2.1 0 .1.2t.1.3.2-.1q.2.2.1.4l1 .6.5.5q0 .2-.3.4 0-.1-.2-.2t-.2-.1v.4q0 .3.3.3-.2 0-.2.4t-.1.7 0 .6q0 .3.2.8t.4.4q-.3.1.5 1l.2.2.2.1.4.2q.2.1.2.3.1.1.2.5t.3.5q0 .1.2.4t.3.6h-.1q0 .2.3.3t.4.3v.2q0 .1.1.3t.1 0q.1-.4-.5-1.4-.3-.5-.4-.6 0-.1-.1-.4t-.1-.3l.1.1q.1.1.2 0t.2.1 0 .1q0 .1.1.4t.3.4.3.4.3.3q.1.1.3.4t0 .3q.2 0 .5.3t.3.4q.1.2.2.6t.1.5q.1.2.2.3t.3.2l.4.2.2.2q.2 0 .5.2t.4.3q.3.1.4.1t.3-.1.3-.1q.4 0 .7.4t.4.4q.8.4 1.3.3-.1 0 0 .1t.2.4.2.3.1.2q.1.1.4.3t.4.4q.1-.1.1-.2 0 .1.2.4t.4.2q.3 0 .3-.7-.7.4-1.1-.4V28q0-.1-.1-.2t-.1-.2 0-.1.1-.1q.2 0 .2-.1t0-.3-.1-.3q0-.1-.2-.4t-.3-.3q-.1.2-.4.1t-.3-.2q0 .1-.1.2t0 .1h-.3v-.4q0-.3.1-.5 0-.1.1-.3t.2-.3.1-.3-.1-.2-.4-.1q-.4.1-.6.5v.2q0 .1-.2.3t-.2.1q-.1.1-.5.1t-.5-.1q-.3-.2-.5-.7t-.2-.8v-.6q0-.4.1-.5t-.1-.6l.2-.2.2-.2q0-.1.1-.1t.1 0 .1 0 0-.1q0-.1-.1-.1v-.1q.1.1.6 0t.6 0q.3.3.5 0l-.1-.2q-.1-.2 0-.3.1.6.7.2l.3.1q.3.1.4.1.1 0 .2.1t.1.1.1 0 .2-.1q.2.3.3.5.2.9.4 1h.2q.1 0 .1-.2t0-.3 0-.3v-.7q-.4-.1-.5-.3t.1-.4.3-.4q0-.1.2-.1t.3-.2.3-.1q.5-.5.4-.8.1 0 .2-.2l-.1-.1q-.1-.1-.2-.1t-.1 0q.2-.2.1-.4.1-.1.1-.2t.2-.3q.2.3.5.1.1-.2 0-.4.1-.1.4-.2t.5-.2q.1 0 .1-.1t.1-.2 0-.3q.1-.1.4-.2t.2-.1l.4-.3q.1-.1 0-.1.4.1.7-.2.2-.2-.1-.4.1-.2-.1-.3t-.3-.1h.5q.3-.2-.2-.4-.4-.1-.9.3zm-3.7 19.6q4.6-.8 7.9-4.3-.1 0-.3-.1t-.3 0q-.4-.2-.5-.2 0-.2-.1-.3t-.2-.2-.3-.2-.2-.1q0-.1-.2-.2t-.1-.1-.2-.1-.2 0-.2 0h-.1l-.1.1q-.1.1-.1 0t-.1.1q-.5-.3-.8-.4l-.2-.2q-.1-.1-.3-.1t-.2-.1-.3.2q-.1.1-.1.3t0 .3q-.2-.1 0-.4t0-.4q-.1-.1-.2-.1t-.3.1-.2.2-.2.2-.2.1-.2.1q-.1.1-.2.3t-.1.3q0-.1-.2-.2t-.2-.1v.8q0 .6.2.8.1.7-.3 1.1-.6.5-.7.9 0 .5.3.6 0 .1-.2.4t-.1.5v.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGlobe;
