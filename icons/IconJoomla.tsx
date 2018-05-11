
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

class IconJoomla extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--joomla ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M26.9 23.9l-3.6 3.6-3.4 3.4-.6.7q-1.5 1.4-3.4 1.9t-3.8.1q-.4 1.5-1.6 2.5t-2.9 1q-1.9 0-3.3-1.3T3 32.5q0-1.6 1-2.8t2.5-1.6q-.5-1.9 0-3.9t2-3.4l.3-.2 3.4 3.4-.3.2q-.8.8-.8 2t.8 2q.8.8 2 .8t2-.8l.6-.7 3.4-3.4 3.6-3.5zM19.3 8.7l.2.3-3.4 3.4-.2-.3q-.8-.8-2-.8t-2 .8-.8 2 .8 2l7.6 7.6-3.4 3.4-3.6-3.5-3.3-3.4-.7-.7Q7 18 6.5 15.9t.1-4Q5 11.6 4 10.3T3 7.5q0-1.9 1.4-3.3t3.2-1.3q1.7 0 3 1.1t1.6 2.7q1.8-.4 3.7.1t3.4 1.9zm18 23.8q0 1.9-1.4 3.3t-3.2 1.3q-1.6 0-2.9-1t-1.6-2.6q-1.9.6-4 .1t-3.6-2l-.3-.3 3.4-3.4.3.3q.8.8 2 .8t2-.8.8-2-.8-2l-7.7-7.6 3.4-3.4 7 7 .6.6q1.5 1.5 2 3.4t0 3.8q1.7.3 2.9 1.5t1.1 3zm-.1-25q0 1.7-1.1 3T33.3 12q.5 1.9 0 3.9t-2 3.6l-.2.3-3.4-3.4.3-.3q.8-.8.8-2t-.8-2-2-.8-2 .8l-7.7 7.7-3.3-3.4 3.6-3.6 3.3-3.4.7-.7q1.5-1.5 3.5-2t4 .1q.3-1.7 1.5-2.8t3.1-1.1q1.9 0 3.2 1.3t1.3 3.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconJoomla;
