
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

class IconEnvira extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--envira ${p.addClass} ${p.className}`
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
                        <g><path d="M20 18.2q-2.3-4.4-3.6-6.2-3.1-4.5-7.7-7.1l-1.6-.8q-2-.9-2.1-.7t.8.8l.9.7Q8 5.9 9.2 7t2.1 2.6 1.5 2.5 1.6 3q.2.3.3.5 1 1.9 1.9 3.4t2.2 3.5 2.6 3.3 2.9 2.8 3.3 2q3.4 1.5 3.4 1.3.1 0-1.1-.8-1.1-.8-1.8-1.3-1.7-1.3-4-4.7T20 18.2zm-7.7 12.1q-1.7-1.3-3-2.8t-2.2-3.2-1.6-3.4-1.3-4.2-1.1-4.6-1.4-5.6T0 0q6.1 0 11.1.8t8.5 2.1 6 3.2 4.2 3.8 2.4 4.5 1.3 4.4.2 4.4-.2 3.9-.4 3.2-.3 2.4L40 40h-2.3l-6.3-6.4-2 .4q-1.5.3-2.7.4t-3.1.1-3.6-.4-3.8-1.3-3.9-2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconEnvira;
