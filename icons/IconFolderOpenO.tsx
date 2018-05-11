
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

class IconFolderOpenO extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--folder-open-o ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37 20.7q0-.7-1.1-.7H13.3q-.8 0-1.8.4T10 21.5l-6.1 7.6q-.3.5-.3.8 0 .7 1.1.7h22.5q.9 0 1.8-.4t1.5-1.1l6.1-7.6q.4-.4.4-.8zm-23.7-3.4h15.9V14q0-.8-.5-1.4t-1.5-.6H15.3q-.8 0-1.4-.6t-.6-1.4V8.7q0-.8-.6-1.4t-1.4-.6H4.7q-.9 0-1.5.6t-.5 1.4v17.7L8 19.9q.9-1.1 2.4-1.8t2.9-.8zm26.3 3.4q0 1.3-.9 2.5l-6.1 7.6q-.9 1.1-2.5 1.8t-2.9.7H4.7q-2 0-3.3-1.4T0 28.6V8.7q0-1.9 1.4-3.3t3.3-1.3h6.6q1.9 0 3.3 1.3t1.3 3.3v.7h11.3q2 0 3.3 1.3t1.4 3.3v3.3h4q1.1 0 2 .6t1.4 1.4q.3.7.3 1.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconFolderOpenO;
