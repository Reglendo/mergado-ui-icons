
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconAssistiveListeningSystems extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--assistive-listening-systems ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M2.9 38.6q0 .5-.5 1t-1 .4-1-.4-.4-1 .4-1 1-.5 1 .5.5 1zm4.2-4.3q0 .6-.4 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.4 1zm1-8.2l5.8 5.8-2 2-5.8-5.8zm7.6-.4q0 .6-.4 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.4 1zm15.8-7.1q0 1.3-.3 2.4t-.8 2.1-1 1.5-1.2 1.4q-.7.8-1 1.2t-.7 1.1-.6 1.5-.2 1.6q0 3.6-2.5 6.1T17.1 40q-.5 0-1-.4t-.4-1 .4-1 1-.5q2.4 0 4.1-1.6t1.7-4.1q0-1.2.2-2.3t.8-2.1 1-1.4 1.2-1.4q.9-1.1 1.3-1.7t.8-1.6.4-2.3q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1q0 .6-.4 1t-1 .4-1-.4-.4-1q0-2.6 1-5t2.7-4.1 4.2-2.8 4.9-1 5 1 4.1 2.8 2.8 4.1 1 5zM20 21.4q0 .6-.4 1t-1 .5-1-.5-.5-1 .5-1 1-.4 1 .4.4 1zm6.4-2.8q0 .5-.4 1t-1 .4-1-.4-.4-1q0-2.1-1.5-3.6t-3.5-1.4q-2.1 0-3.6 1.4t-1.4 3.6q0 .6-.4 1t-1.1.4-1-.4-.4-1q0-3.3 2.3-5.6t5.6-2.3 5.5 2.3 2.3 5.6zm8.8-6.5q.2.6 0 1.1t-.8.8q-.2.1-.5.1-.4 0-.8-.3t-.5-.7q-1.5-3.9-5-6.5-.5-.4-.6-1t.3-1q.4-.5.9-.6t1.1.3q4.1 3 5.9 7.8zm4.7-1.8q.2.6 0 1.1t-.8.8q-.3.1-.5.1-1 0-1.4-1-2-5.3-6.6-8.7-.5-.4-.6-1t.3-1q.4-.5 1-.6t1 .3q5.2 3.9 7.6 10z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAssistiveListeningSystems;
