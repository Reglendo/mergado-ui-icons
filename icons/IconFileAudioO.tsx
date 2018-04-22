
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

class IconFileAudioO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--file-audio-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.8 8.5q.6.6 1 1.7t.5 1.9v25.8q0 .8-.6 1.5t-1.6.6h-30q-.9 0-1.5-.6T3 37.9V2.1q0-.8.6-1.5T5.1 0h20q.9 0 2 .4t1.7 1.1zM25.9 3v8.4h8.4q-.3-.6-.5-.9l-7-7q-.3-.2-.9-.5zm8.5 34.1V14.3h-9.3q-.9 0-1.5-.6t-.6-1.6V2.9H5.9v34.2h28.5zM16.8 19q.5.2.5.6v12.2q0 .5-.5.7h-.2q-.3 0-.5-.2l-3.7-3.7h-3q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h3l3.7-3.8q.3-.3.7-.1zm9.3 15.4q.7 0 1.2-.6 2.8-3.5 2.8-8.1t-2.8-8.1q-.4-.5-1-.5t-1 .3q-.5.4-.6 1t.4 1q2.2 2.8 2.2 6.3T25.1 32q-.4.5-.4 1.1t.6.9q.4.4.8.4zM21.4 31q.6 0 1.1-.4 1.9-2.1 1.9-4.9t-1.9-4.9q-.4-.4-1-.4t-1 .4-.5 1 .4 1q1.2 1.3 1.2 2.9t-1.2 2.9q-.4.5-.4 1.1t.5 1q.4.4.9.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFileAudioO;
