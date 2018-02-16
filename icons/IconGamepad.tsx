
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

class IconGamepad extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--gamepad ${p.addClass} ${p.className}`
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
                        <g><path d="M17.3 24v-2.7q0-.3-.2-.4t-.5-.2h-4v-4q0-.3-.2-.5T12 16H9.3q-.3 0-.5.2t-.2.5v4H4.7q-.3 0-.5.1t-.2.5V24q0 .3.2.5t.5.2h3.9v3.9q0 .3.2.5t.5.2H12q.3 0 .4-.2t.2-.5v-3.9h4q.3 0 .5-.2t.2-.5zm11.9 1.3q0-1.1-.7-1.9t-1.9-.7-1.9.7-.8 1.9.8 1.9 1.9.8 1.9-.8.7-1.9zm5.4-5.3q0-1.1-.8-1.9t-1.9-.8-1.9.8-.8 1.9.8 1.9 1.9.8 1.9-.8.8-1.9zm5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1T0 22.7t3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconGamepad;
