
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

class IconBirthdayCake extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--birthday-cake ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M40 31.4V40H0v-8.6q1 0 1.9-.3t1.3-.6 1.1-.8q.6-.6 1.1-.9t1.3-.2 1.2.2 1.2.9q.6.5 1 .8t1.3.6 1.9.3q1.1 0 1.9-.3t1.3-.6 1.1-.8q.5-.5.7-.6t.7-.4 1-.1q.8 0 1.3.2t1.1.9q.6.5 1.1.8t1.3.6 1.9.3 1.9-.3 1.3-.6 1-.8q.7-.6 1.2-.9t1.2-.2q.8 0 1.3.2t1.1.9q.7.5 1.1.8t1.3.6 1.9.3zm0-7.1v4.3q-.8 0-1.2-.3t-1.2-.8q-.7-.6-1.1-.9t-1.3-.6-1.9-.3q-1 0-1.9.3t-1.3.6-1 .9q-.5.4-.8.6t-.6.3-1 .2q-.8 0-1.3-.3t-1.1-.8q-.7-.6-1.1-.9t-1.3-.6-1.9-.3q-1 0-1.9.3t-1.3.6-1.1.9q-.4.4-.7.6t-.7.3-1 .2q-.7 0-1.2-.3t-1.2-.8q-.6-.6-1-.9T8.6 26t-1.9-.3q-1.1 0-1.9.3t-1.3.6-1.1.9q-.7.6-1.1.8t-1.3.3v-4.3q0-1.8 1.3-3t3-1.3h1.4V10h5.7v10h5.7V10h5.8v10h5.7V10h5.7v10h1.4q1.8 0 3 1.3t1.3 3zM11.4 5q0 1.7-.8 2.6t-2 1q-1.2 0-2-.9t-.9-2q0-.6.2-1.1t.6-.8.6-.6.7-.7.6-1T8.6 0q.8 0 1.8 1.7t1 3.3zm11.5 0q0 1.7-.8 2.6t-2.1 1q-1.2 0-2-.9t-.9-2q0-.6.3-1.1t.5-.8.7-.6.7-.7.5-1T20 0q.8 0 1.9 1.7t1 3.3zm11.4 0q0 1.7-.8 2.6t-2.1 1q-1.2 0-2-.9t-.8-2q0-.6.2-1.1t.5-.8.7-.6.7-.7.5-1 .2-1.5q.9 0 1.9 1.7t1 3.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBirthdayCake;
