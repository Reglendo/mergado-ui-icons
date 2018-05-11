
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

class IconRssSquare extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--rss-square ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M14.4 28.6q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .8 2-.8.8-2zm7.9 2.1q-.3-5.2-4-8.9t-8.8-3.9q-.3 0-.6.2t-.2.5v2.9q0 .2.2.4t.5.3q3.4.2 5.9 2.7t2.7 5.9q0 .2.2.4t.5.2h2.8q.3 0 .6-.2t.2-.5zm8.5 0q-.1-3.4-1.2-6.6t-3.1-5.9-4.6-4.5-5.8-3.1-6.6-1.3q-.4 0-.6.2-.2.2-.2.5v2.9q0 .3.2.5t.5.2q4.6.2 8.4 2.5t6.3 6.2 2.5 8.4q0 .3.2.5t.5.2h2.8q.3 0 .5-.2.3-.2.2-.5zm6.5-21.4v21.4q0 2.7-1.9 4.6t-4.5 1.8H9.4q-2.6 0-4.5-1.8T3 30.7V9.3q0-2.7 1.9-4.6t4.5-1.8h21.5q2.6 0 4.5 1.8t1.9 4.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconRssSquare;
