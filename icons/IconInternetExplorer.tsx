
import * as React from "react"
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

class IconInternetExplorer extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--internet-explorer ${p.addClass} ${p.className}`
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
                        <g><path d="M40 20.9q0 1.3-.2 2.3H14.2q0 3.3 2.4 5.5t5.7 2.2q2.3 0 4.2-1t3-3H39q-1.3 3.6-3.8 6.3t-6 4.2-7.2 1.5q-4.1 0-7.9-1.8-5.1 2.5-8.8 2.5-5.3 0-5.3-5.8 0-2.6 1-6.2.4-1.3 2.4-5.1Q7.9 14.5 14 9q-4.1 1.8-9.5 7.9 1.4-6.1 6.3-10t11.2-4q.7 0 1 .1Q28.7.4 32.7.4q1.4 0 2.6.2t2.1.9 1.5 1.8.5 2.5q0 2.6-1.7 6.4 2.3 4.1 2.3 8.7zM38.4 6.6q0-1.8-1.1-2.9t-3.1-1.1q-2.4 0-5.7 1.6 2.7 1 5 2.9t3.8 4.3q1.1-3 1.1-4.8zM2.9 34.2q0 2 1 3t3 1q2.6 0 6-1.8-2.7-1.6-4.8-4.1T5 26.8q-2.1 4.6-2.1 7.4zm11.2-15.9h16.3q-.2-3.1-2.6-5.3t-5.6-2.1q-3.2 0-5.6 2.1t-2.5 5.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconInternetExplorer;
