
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

class IconMarsStrokeH extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--mars-stroke-h ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.5 20.4q.4.4.4.9t-.4 1l-6.1 6.1q-.2.2-.5.2t-.5-.2l-.9-1q-.2-.2-.2-.4t.2-.5l3.8-3.8h-6.1v4.6q0 .3-.2.5t-.4.2h-1.4q-.3 0-.4-.2t-.2-.5v-4.6h-2.8q-.5 4.5-3.9 7.5T12 33.3q-3.5 0-6.4-1.8t-4.4-4.9T.1 20q.3-2.8 1.8-5.1t3.9-3.8T11 9.4q3.2-.2 6 1.1t4.7 3.9 2.1 5.6h2.8v-4.7q0-.2.2-.4t.4-.2h1.4q.3 0 .4.2t.2.4V20h6.1l-3.8-3.8q-.2-.2-.2-.5t.2-.5l.9-.9q.2-.2.5-.2t.5.2zM12 30.6q3.8 0 6.5-2.7t2.8-6.6-2.8-6.5T12 12t-6.6 2.8-2.7 6.5 2.7 6.6 6.6 2.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMarsStrokeH;
