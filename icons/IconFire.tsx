
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

class IconFire extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--fire ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M35.9 37.9v1.4q0 .3-.2.5t-.5.2h-30q-.3 0-.5-.2t-.2-.5v-1.4q0-.3.2-.5t.5-.3h30q.3 0 .5.3t.2.5zm-5.7-23.6q0 1.7-.5 3.2T28.2 20t-1.9 2-2.2 1.7-1.9 1.6-1.4 1.8-.6 2.2q0 2.1 1.5 5h-.1q-2-.9-3.5-1.9T15 30.2t-2.6-2.7-1.6-3.4-.6-4.1q0-1.7.6-3.2t1.4-2.5 1.9-2 2.2-1.7T18.2 9t1.5-1.8.5-2.2q0-2.1-1.5-5h.1q2 .9 3.6 1.9t3 2.2T28 6.8t1.6 3.4.6 4.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFire;
