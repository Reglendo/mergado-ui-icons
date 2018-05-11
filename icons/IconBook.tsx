
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

class IconBook extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--book ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M38.1 10.7q.9 1.2.4 2.9l-6.1 20.2q-.5 1.4-1.8 2.4t-2.7.9H7.3q-1.7 0-3.3-1.2T1.8 33q-.6-1.5-.1-2.8 0-.1.1-.6t.1-.9q0-.1-.1-.4t-.1-.5l.2-.4q.1-.2.4-.6t.4-.5q.5-.8 1-2t.6-2.1q.1-.2 0-.6t0-.7q.1-.2.4-.6t.4-.5q.5-.8.9-2.1t.6-2q0-.2-.1-.7t0-.6q.1-.3.5-.7t.5-.5q.4-.6 1-1.9t.6-2.1q0-.2-.1-.6T9 8q0-.2.2-.4t.4-.5.4-.5l.3-.6.4-.8q.2-.4.3-.8t.5-.7.5-.6.9-.2 1 .1v.1q.8-.2 1.1-.2h17q1.7 0 2.6 1.2T35 7l-6.2 20.2q-.8 2.7-1.6 3.5t-2.8.7H5q-.6 0-.9.4-.2.3 0 .9.5 1.6 3.2 1.6h20.6q.7 0 1.3-.4t.8-.9l6.7-22q.1-.5.1-1.3.8.3 1.3 1zm-23.8 0q-.1.3.1.5t.4.2h13.6q.3 0 .6-.2t.3-.5l.5-1.4q.1-.3 0-.5t-.5-.2H15.7q-.2 0-.5.2t-.4.5zm-1.8 5.7q-.1.3 0 .5t.5.2h13.5q.3 0 .6-.2t.4-.5L28 15q0-.3-.1-.5t-.4-.2H13.9q-.3 0-.6.2t-.4.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBook;
