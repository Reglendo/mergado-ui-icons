
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

class IconAmbulance extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--ambulance ${p.addClass} ${p.className}`
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
                        <g><path d="M13 30.4q0-1.1-.8-1.8t-1.8-.8-1.8.8-.8 1.8.8 1.8 1.8.8 1.8-.8.8-1.8zM5.2 20H13v-5.2H9.8q-.3 0-.5.2l-3.9 3.9q-.2.3-.2.5v.6zm26 10.4q0-1.1-.8-1.8t-1.8-.8-1.9.8-.7 1.8.7 1.8 1.9.8 1.8-.8.8-1.8zm2.6-13.6v-3.9q0-.3-.2-.5t-.5-.2h-4.5V7.7q0-.3-.2-.5t-.5-.2H24q-.3 0-.4.2t-.2.5v4.5h-4.6q-.3 0-.4.2t-.2.5v3.9q0 .2.2.4t.4.2h4.6v4.5q0 .3.2.5t.4.2h3.9q.3 0 .5-.2t.2-.5v-4.5h4.5q.3 0 .5-.2t.2-.4zM39 5.7v23.4q0 .5-.4.9t-.9.4h-3.9q0 2.1-1.6 3.7t-3.6 1.5-3.7-1.5-1.5-3.7h-7.8q0 2.1-1.5 3.7t-3.7 1.5-3.7-1.5-1.5-3.7H2.6q-.5 0-.9-.4t-.4-.9.4-.9.9-.4v-8.4q0-.6.3-1.2t.6-1.1l4-4q.4-.4 1.1-.6t1.1-.3H13V5.7q0-.5.4-.9t.9-.4h23.4q.5 0 .9.4t.4.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconAmbulance;
