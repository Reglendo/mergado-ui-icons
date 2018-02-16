
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

class IconShoppingBag extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--shopping-bag ${p.addClass} ${p.className}`
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
                        <g><path d="M39.2 31.4l.8 7q.1.6-.4 1.1-.4.5-1 .5H1.4q-.6 0-1-.5-.5-.5-.4-1.1l.8-7h38.4zm-2.1-18.7l2 17.3H.9l2-17.3q0-.5.4-.9t1-.4H10v2.9q0 1.2.8 2t2.1.8 2-.8.8-2v-2.9h8.6v2.9q0 1.2.8 2t2 .8 2.1-.8.8-2v-2.9h5.7q.6 0 1 .4t.4.9zm-8.5-4.1v5.7q0 .6-.5 1t-1 .4-1-.4-.4-1V8.6q0-2.4-1.7-4.1t-4-1.6-4 1.6-1.7 4.1v5.7q0 .6-.4 1t-1 .4-1-.4-.5-1V8.6q0-3.6 2.5-6.1T20 0t6.1 2.5 2.5 6.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShoppingBag;
