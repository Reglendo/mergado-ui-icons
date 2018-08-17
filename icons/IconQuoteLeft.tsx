
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconQuoteLeft extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--quote-left ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M18.6 21.4V30q0 1.8-1.2 3t-3 1.3H5.8q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3zm20 0V30q0 1.8-1.2 3t-3 1.3h-8.6q-1.8 0-3-1.3t-1.3-3V14.3q0-2.3.9-4.4t2.4-3.7 3.7-2.4 4.4-.9h1.5q.5 0 1 .4t.4 1v2.8q0 .6-.4 1t-1 .5h-1.5q-2.3 0-4 1.6t-1.7 4.1v.7q0 .9.6 1.5t1.6.6h5q1.7 0 3 1.3t1.2 3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconQuoteLeft;
