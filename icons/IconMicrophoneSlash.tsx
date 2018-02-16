
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

class IconMicrophoneSlash extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--microphone-slash ${p.addClass} ${p.className}`
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
                        <g><path d="M10.6 21.1l-2.3 2.2q-.9-2.3-.9-4.7v-2.9q0-.6.4-1t1-.4 1 .4.4 1v2.9q0 1.2.3 2.5zM35.4 7.7l-8 8v2.9q0 2.9-2.1 5t-5.1 2.1q-1.2 0-2.4-.4l-2.2 2.1q2.2 1.2 4.6 1.2 4.1 0 7.1-3t2.9-7v-2.9q0-.6.4-1t1-.4 1 .4.5 1v2.9q0 4.9-3.3 8.6t-8.2 4.1v3h5.8q.5 0 1 .4t.4 1-.4 1-1 .4H13.1q-.6 0-1-.4t-.5-1 .5-1 1-.4h5.7v-3q-2.8-.2-5.3-1.8l-5.6 5.7q-.3.2-.5.2t-.6-.2L5 33.4q-.2-.3-.2-.5t.2-.6L32.6 4.8q.2-.2.5-.2t.5.2l1.8 1.8q.2.3.2.5t-.2.6zm-8.5-3L13.1 18.6V7.1q0-2.9 2.1-5t5-2.1q2.3 0 4.1 1.3t2.6 3.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMicrophoneSlash;
