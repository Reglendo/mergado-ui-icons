
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

class IconListAlt extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--list-alt ${p.addClass} ${p.className}`
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
                        <g><path d="M8.6 26.4v1.5q0 .2-.2.5t-.5.2H6.4q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.3H6.4q-.3 0-.5-.3t-.2-.5v-1.4q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.2H6.4q-.3 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h1.5q.2 0 .5.2t.2.5zm25.7 11.4v1.5q0 .2-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.3H12.1q-.2 0-.5-.3t-.2-.5v-1.4q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm0-5.7v1.4q0 .3-.2.5t-.5.2H12.1q-.2 0-.5-.2t-.2-.5V15q0-.3.2-.5t.5-.2h21.5q.3 0 .5.2t.2.5zm2.8 15.7V12.1q0-.2-.2-.5t-.5-.2H3.6q-.3 0-.5.2t-.2.5v18.6q0 .3.2.5t.5.2h32.8q.3 0 .5-.2t.2-.5zM40 6.4v24.3q0 1.5-1 2.5t-2.6 1.1H3.6q-1.5 0-2.6-1.1t-1-2.5V6.4Q0 5 1.1 3.9t2.5-1h32.8q1.5 0 2.6 1t1 2.5z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconListAlt;
