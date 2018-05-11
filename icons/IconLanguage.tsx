
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

class IconLanguage extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--language ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M17.6 24.1h-.3q-.3 0-.7-.3l-.4-.2q-1-.5-2-1.1-.1-.1-.9-.7t-.8-.6q-1.5 2.3-3 4-1.8 2.1-2.4 2.5h-.8q.1 0 1.8-2 .5-.5 1.9-2.6t1.8-2.6q.4-.7 1.1-2.2t.8-1.7q-.2-.1-2.4.7-.2 0-.7.2t-.7.2-.4.1q-.1 0-.1.2t0 .2q-.1.3-.7.4-.5.1-1 0-.4-.1-.6-.5-.1-.1-.1-.5.1-.1.5-.1t.7-.2q1.3-.3 2.3-.7 2.2-.8 2.3-.8.2 0 .9-.4t1-.5q.2 0 .5-.1t.3-.2.2 0q0 .3-.1.8l-.2.6q-.2.6-.6 1.2t-.4.7q-.6 1.1-1.7 2.9l1.4.7q.3.1 1.7.7t1.5.6q.1 0 .2.6t.1.7zM13 13.2q.1.3-.1.6-.2.6-1.1.9-.7.3-1.3.3-.6-.1-1.1-.6-.3-.4-.4-.9v-.1q.1.1.4.1t.6 0 1.3-.4q.8-.2 1.3-.3.3 0 .4.4zm15.6 2.9l1.4 5.1-3.1-1zM3.9 34l15.5-5.2V5.7L3.9 10.9V34zm27.7-7.1l2.2.7-4-14.7-2.2-.7-4.8 12 2.2.7 1-2.5 4.7 1.5zM20.3 5.4l12.8 4.1V1zm7 29.5l3.5.3-1.2 3.6-.9-1.5q-2.9 1.9-6.1 2.4-1.3.3-2.1.3h-1.9q-1.7 0-4.4-.9t-4.1-1.9q-.2-.1-.2-.3 0-.2.1-.3t.3-.2q.1 0 .4.2t.7.4.5.2q1.6.9 3.5 1.4t3.5.6q2.2 0 3.8-.4t3.5-1.1q.3-.2.7-.3t.7-.5.6-.3zm10-24.1v24.1L20 29.4q-.3.2-8.4 2.9T3.4 35q-.3 0-.4-.3V10.6l.1-.2q.1-.2.4-.3Q5.9 9.3 6.9 9V.4l12.4 4.4q.1 0 3.6-1.2T30 1.2 33.6 0q.4 0 .4.5v9.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconLanguage;
