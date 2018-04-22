
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

class IconQuestionCircleO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--question-circle-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M22.6 26.8v3.6q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5v-3.6q0-.3.2-.5t.6-.2h3.5q.3 0 .5.2t.2.5zm5.8-11.1q0 1.1-.4 2t-1 1.6-1.2.9-1.3.8q-.7.4-1 .7t-.6.5-.3.7v.7q0 .3-.2.5t-.5.2h-3.5q-.4 0-.6-.2t-.2-.5v-1.5q0-.8.3-1.5t.5-1 .9-.8.9-.6 1-.5q1.2-.5 1.7-.9t.5-1.1q0-1-1-1.6t-2.1-.7q-1.3 0-2.2.6-.6.5-1.8 1.9-.2.2-.5.2t-.4-.1L13 14.2q-.3-.2-.3-.5t.1-.5q2.7-4.3 7.8-4.3 2.9 0 5.3 2t2.5 4.8zm-8.3-10q-2.9 0-5.5 1.2t-4.6 3-3 4.6T5.9 20 7 25.5t3 4.6 4.6 3 5.5 1.2 5.6-1.2 4.5-3 3.1-4.6 1.1-5.5-1.1-5.5-3.1-4.6-4.5-3.1-5.6-1.1zM37.3 20q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQuestionCircleO;
