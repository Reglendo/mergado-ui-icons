
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

class IconVenusDouble extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--venus-double ${p.addClass} ${p.className}`
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
                        <g><path d="M40 11.8q.2 3.5-1.2 6.5t-4.2 5-6 2.3v5.8h5q.3 0 .5.2t.2.5v1.5q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5H14.3v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5h-5q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h5v-5.8q-3.3-.3-6-2.3t-4.2-5T0 11.8q.4-4.6 3.7-7.9T11.6.1q4.6-.5 8.4 2.1Q23.8-.4 28.4.1q4.6.4 7.9 3.8t3.7 7.9zm-20 8q2.9-2.9 2.9-6.9t-2.9-7q-2.9 2.9-2.9 7t2.9 6.9zm-7.1 3.1q2.5 0 4.8-1.3-3.4-3.7-3.4-8.7 0-5 3.4-8.8-2.3-1.2-4.8-1.2-4.2 0-7.1 2.9t-2.9 7.1 2.9 7 7.1 3zm12.8 8.5v-5.8q-3-.3-5.7-2.1-2.7 1.8-5.7 2.1v5.8h11.4zm1.4-8.5q4.2 0 7.1-3t2.9-7-2.9-7.1-7.1-2.9q-2.5 0-4.8 1.2 3.4 3.8 3.4 8.8 0 5-3.4 8.7 2.3 1.3 4.8 1.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconVenusDouble;
