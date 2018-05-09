
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconMobile extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--mobile ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M21.9 31.4q0-.7-.6-1.2t-1.2-.6-1.3.6-.5 1.2.5 1.3 1.3.5 1.2-.5.6-1.3zm4.6-3.5V12.1q0-.2-.2-.5t-.5-.2H14.4q-.3 0-.5.2t-.3.5v15.8q0 .2.3.5t.5.2h11.4q.3 0 .5-.2t.2-.5zm-4.3-19q0-.3-.3-.3h-3.6q-.4 0-.4.3t.4.4h3.6q.3 0 .3-.4zm6.4-.3v22.8q0 1.2-.8 2t-2 .9H14.4q-1.2 0-2.1-.9t-.8-2V8.6q0-1.2.8-2t2.1-.9h11.4q1.1 0 2 .9t.8 2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconMobile;
