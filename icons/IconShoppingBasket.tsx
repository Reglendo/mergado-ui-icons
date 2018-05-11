
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

class IconShoppingBasket extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--shopping-basket ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.3 17.5q1 0 1.7.7t.8 1.8-.8 1.8-1.7.7H37l-2.3 12.8q-.1.9-.8 1.5t-1.6.6H7.5q-.9 0-1.6-.6T5 35.3L2.8 22.5h-.3q-1 0-1.8-.7T0 20t.7-1.8 1.8-.7h34.8zM9.4 33q.5 0 .9-.4t.3-.9l-.7-8.1q0-.5-.4-.8t-.9-.3-.8.4-.3.9l.6 8.1q0 .5.4.8t.8.3h.1zm8-1.2v-8.1q0-.5-.4-.8t-.9-.4-.8.4-.4.8v8.1q0 .5.4.9t.8.3.9-.3.4-.9zm7.4 0v-8.1q0-.5-.3-.8t-.9-.4-.9.4-.3.8v8.1q0 .5.3.9t.9.3.9-.3.3-.9zm6.9.1l.6-8.1q0-.5-.3-.9t-.8-.4-1 .3-.4.8l-.6 8.1q0 .5.3.9t.8.4h.1q.5 0 .9-.3t.4-.8zM9.2 8.3l-1.8 8H4.9l1.9-8.6Q7.2 6 8.6 4.9t3.1-1.1h3.2q0-.5.4-.8t.8-.4h7.5q.5 0 .9.4t.3.9h3.3q1.7 0 3.1 1t1.7 2.8l2 8.6h-2.6l-1.8-8q-.2-.9-.9-1.4t-1.5-.6h-3.3q0 .5-.3.9t-.9.4h-7.5q-.5 0-.8-.4t-.4-.9h-3.2q-.9 0-1.6.6t-.9 1.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconShoppingBasket;
