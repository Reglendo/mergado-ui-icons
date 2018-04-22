
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

class IconBraille extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon m--braille ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M3.5 25.2q-1.2 0-2.1.9t-.8 2.1.8 2 2.1.9 2.1-.9.8-2-.8-2.1-2.1-.9zm9.3 0q-1.2 0-2 .9t-.9 2.1.9 2 2 .9 2.1-.9.8-2-.8-2.1-2.1-.9zm0-9.3q-1.2 0-2 .9t-.9 2 .9 2.1 2 .8 2.1-.8.8-2.1-.8-2-2.1-.9zm14 9.3q-1.2 0-2 .9t-.9 2.1.9 2 2 .9 2.1-.9.8-2-.8-2.1-2.1-.9zm9.4 0q-1.3 0-2.1.9t-.9 2.1.9 2 2.1.9 2-.9.9-2-.9-2.1-2-.9zm-9.4-9.3q-1.2 0-2 .9t-.9 2 .9 2.1 2 .8 2.1-.8.8-2.1-.8-2-2.1-.9zm9.4 0q-1.3 0-2.1.9t-.9 2 .9 2.1 2.1.8 2-.8.9-2.1-.9-2-2-.9zm0-9.3q-1.3 0-2.1.8t-.9 2.1.9 2.1 2.1.8 2-.8.9-2.1-.9-2.1-2-.8zM7 28.2q0 1.4-1 2.4t-2.5 1.1T1 30.6t-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5zm9.3 0q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5zM7 18.8q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1T6 16.4t1 2.4zm9.3 0q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4zM7 9.5Q7 11 6 12t-2.5 1T1 12 0 9.5 1 7t2.5-1T6 7t1 2.5zm23.3 18.7q0 1.4-1 2.4t-2.5 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.5 1 1 2.5zm-14-18.7q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5zm23.3 18.7q0 1.4-1 2.4t-2.4 1.1-2.5-1.1-1-2.4 1-2.5 2.5-1 2.4 1 1 2.5zm-9.3-9.4q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.5 1.1 1 2.4zm9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.4 2.5-1.1 2.4 1.1 1 2.4zm-9.4-9.3q0 1.5-1 2.5t-2.5 1-2.5-1-1-2.5 1-2.5 2.5-1 2.5 1 1 2.5zm9.4 0q0 1.5-1.1 2.5t-2.4 1-2.5-1-1-2.5 1-2.5 2.5-1 2.4 1 1 2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBraille;
