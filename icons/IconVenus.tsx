
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

class IconVenus extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--venus ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M33.2 12.9q0 4.9-3.3 8.5t-8.1 4.2v5.8h5q.3 0 .5.2t.2.5v1.5q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5h-5q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h5v-5.8q-3.3-.3-6-2.3t-4.2-5-1.2-6.5q.3-3 1.8-5.5t4.1-4.2 5.5-2q3.8-.4 7.1 1.2T31.3 6t1.9 6.9zm-22.8 0q0 4.1 2.9 7t7.1 3 7-3 3-7-3-7.1-7-2.9-7.1 2.9-2.9 7.1z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconVenus;
