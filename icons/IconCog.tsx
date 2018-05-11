
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

class IconCog extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--cog ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M25.9 20q0-2.4-1.7-4t-4.1-1.7-4 1.7-1.7 4 1.7 4 4 1.7 4.1-1.7 1.7-4zm11.4-2.4v4.9q0 .3-.2.5t-.4.3l-4.2.6q-.4 1.3-.8 2.1.7 1.1 2.3 3.1.3.2.3.5t-.2.5q-.6.9-2.2 2.4t-2.1 1.6q-.3 0-.6-.2l-3.1-2.4q-1 .5-2 .9-.4 3-.7 4.1-.1.6-.8.6h-4.9q-.3 0-.6-.1t-.2-.5l-.7-4.1q-1.1-.4-2-.9l-3.1 2.4q-.2.2-.6.2-.3 0-.5-.2-2.8-2.6-3.7-3.8-.2-.2-.2-.5 0-.2.2-.5.3-.5 1.1-1.5t1.2-1.5q-.6-1.2-.9-2.3l-4.1-.6q-.2 0-.4-.2t-.2-.6v-4.9q0-.3.2-.5t.4-.3l4.2-.7q.3-1 .8-2-.9-1.3-2.4-3.1-.2-.3-.2-.5t.2-.5q.6-.8 2.2-2.4t2.1-1.6q.3 0 .6.2l3.1 2.4q1-.5 2-.9.4-3 .7-4.1.1-.6.8-.6h4.9q.3 0 .6.1t.2.5l.7 4.1q1 .4 2 .9l3.1-2.4q.2-.2.6-.2.3 0 .5.2 2.9 2.6 3.7 3.8.2.2.2.5 0 .2-.2.5l-1.2 1.5-1.2 1.5q.6 1.2 1 2.2l4 .7q.3 0 .5.2t.2.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCog;
