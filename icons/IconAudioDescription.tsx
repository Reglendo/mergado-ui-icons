
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

class IconAudioDescription extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--audio-description ${p.addClass} ${p.className}`
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
                        <g><path d="M8.8 21.7h3v-4.6zm18-1.7q0-1.5-.9-2.5t-2.6-.9h-.9v6.8h.9q1.6 0 2.5-1t1-2.4zm-10.1-6.6l.1 13.2q0 .3-.2.4t-.4.2h-3.8q-.3 0-.4-.2t-.2-.4v-1.1H6.7L5.8 27q-.2.2-.5.2H.6q-.4 0-.5-.3t0-.6L9.9 13q.1-.2.4-.2h5.8q.3 0 .5.2t.1.4zM31.2 20q0 3.4-2.2 5.3t-5.7 1.9h-4.7q-.2 0-.4-.2t-.2-.4V13.4q0-.3.2-.4t.4-.2h4.7q3.5 0 5.7 1.9t2.2 5.3zm2.7 0v.5q0 .3-.1 1.3t-.4 1.7-.8 1.9-1.2 1.8h-.9q.6-.8 1.1-1.8t.8-2 .3-1.7.2-1.2v-.9q0-.2-.1-1.1t-.4-1.6-.7-1.9-1.2-2.2h.8q.7.8 1.2 1.9t.8 1.9.4 1.7.2 1.2zm3.3 0v.5q0 .3-.2 1.3t-.4 1.7-.7 1.9-1.3 1.8h-.9q.6-.8 1.1-1.8t.8-2 .3-1.7.2-1.2v-.9q0-.2-.1-1.1t-.4-1.6-.7-1.9-1.1-2.2h.7q.7.8 1.3 1.9t.8 1.9.4 1.7.1 1.2zm3.1 0v.5q0 .3-.1 1.3t-.4 1.7-.8 1.9-1.3 1.8h-.8q.6-.8 1.1-1.8t.7-2 .4-1.7.2-1.2v-.9q0-.2-.2-1.1t-.3-1.6-.7-1.9-1.2-2.2h.8q.7.8 1.2 1.9t.8 1.9.4 1.7.2 1.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAudioDescription;
