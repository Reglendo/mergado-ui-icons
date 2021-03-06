
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

class IconOptinMonster extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--optin-monster ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M8.4 33.6q-.2.3-.5.6t-.7.5q-.4.1-.9-.1t-.5-.5q0-.4.7-1t1.2-.7q.4 0 .6.4t.1.8zm23.4 0q.2.3.5.6t.7.5q.4.1.9-.1t.4-.5q.1-.4-.6-1t-1.2-.7q-.4 0-.6.4t-.1.8zm.9-1.9q.2.5 1 1.1t1.3.7q.8.2 1.5-.1t.6-.9q0-.8-1.2-1.7t-2-1.1q-.7-.1-1.1.7t-.1 1.3zm-25.2 0q-.2.5-1 1.1t-1.3.7q-.8.2-1.5-.1t-.6-.9q0-.8 1.2-1.7t2-1.1q.7-.1 1.1.7t.1 1.3zm12.8-19.6q-.7 0-1.3.2.4.2.7.5t.3.9q0 .6-.4 1.1t-1.2.4q-.9 0-1.4-.7-.1.4-.1.7 0 1.3 1 2.2t2.4.9q1.4 0 2.4-.9t.9-2.2-.9-2.2-2.4-.9zm5.3-3.9q-1.7-1.9-3.9-2.3t-4.3.8q.5-1 1.5-1.7t2-.7 2.2.3 1.7 1.3.8 2.3zm13.1 21.7q.2.2-.2.8.2.4.2.7 0 .9-.8 1.9T36 34.9t-2.1.7q-.8 0-1.6-.4t-1.2-1.1q-12 .4-22 0-.4.7-1.2 1.1t-1.6.4q-1.5-.1-3.1-1.4t-1.7-2.8q.1-.4.2-.7-.4-.6-.2-.8.1-.2.5 0 .3-.4.7-.9-.1-.5.1-.7.2-.1.6.1.6-.3 1.1-.6 0-.5.2-.6.4-.2.9.3.6-.1 1.1 0 .3.1.6.3v-1.3H7q-.9-.2-1.7-.8t-.9-1.5q-.2-.7 0-1.4.2-1.1 1.6-1.7 0-.3.3-.6t.6-.4.6.1.4.6h.2q.8 0 1 .4.1 0 .1.1.2 0 .6-.1t.5 0q-.3-.2-.5-.3-.4-.7-1.6-.8v-.2q-1.1 0-2.1-.3t-1.5-.8q-.5-.7-.7-1.6t0-2q.2-2.2 1.5-3.1.4-.3.9-.1t.6.7v.2q0 .2.1.4t0 .4.1.3.2.2q.4.2 1.3.2.8-.8 1.7-1.3-.7-.1-2.8.2l.8-.8q1.1-1 2.8-1.9 2.6-1.3 5-1.5-.4-.2-.7-.3t-.9-.2-.7-.2-.8-.2-.8-.2Q22.6 5.8 28 10.4q1.8 1.5 2.8 3.9 1.5.2 2.1-.1l.2-.2q.1-.1.1-.3t0-.4.1-.4v-.2q.1-.5.6-.7t.9.1q1.3.9 1.6 3.1.1 1-.1 2t-.7 1.6q-.5.5-1.5.8t-2 .3v.2q-1.3.1-1.7.8-.2.1-.5.3h.5q.3 0 .6.1 0-.1.1-.1.2-.4 1-.4h.2q.1-.4.4-.6t.5-.1.7.4.3.6q1.4.6 1.6 1.7.2.7.1 1.4-.3.9-1 1.5t-1.7.8h-.3v1.3q.3-.2.6-.3.5-.1 1.1 0 .5-.5.9-.3.2.1.2.6.6.3 1.1.6.4-.2.6-.1.2.2.1.7.5.5.7.9.4-.1.5 0zm-4.8-16.6q0 .5-.1.9 1.4.6 1.9 2.3.1-.6-.2-1.7t-.7-1.6q-.3-.3-.6-.3t-.3.4zM32.5 15q.7.7.9 1.9t0 2.2q1.1-.2 1.7-.8.2-.2.3-.5-.1-1.1-.6-2t-1.3-1.2q-.3.3-1 .4zm-.6.1h-.8q.8 2 1 4.1h.7q.3-1.2 0-2.4t-.9-1.7zM4.5 16.5q.5-1.7 2-2.3-.2-.4-.2-.9 0-.4-.3-.4t-.6.3q-.5.5-.7 1.6t-.2 1.7zm.6 1.8q.6.5 1.7.8-.2-1 0-2.2t.9-1.9q-.7-.1-.9-.4-.9.3-1.4 1.2t-.6 2q.2.3.3.5zm3.1.9q.3-2.1 1.3-4.1l-.9.3-.8.4q-.8 1.5-.4 3.4h.8zm16.9.7q.1.7.3 1.9t.2 1.6q0 .3.2.4t.4-.1q.7-.4 1.1-1.5t.4-2.2q-.5 0-2.6-.1zM20.2 8.7q-2.1 0-3.5 1.5t-1.5 3.4q0 2.1 1.5 3.5t3.5 1.5 3.5-1.5 1.4-3.5q0-2-1.5-3.4t-3.4-1.5zm4 11.2h-3.7q-.1.5 0 1.5t.2 1.1q.6.3 1.7.3t1.7-.2q.1 0 .1-.7t0-1.2 0-.8zm-4.7 3.5q.1-.1.1-.9t0-1.5 0-1.1h-3.8q-.1.4-.1 1.1t0 1.5.2.8q.6.2 1.8.3t1.8-.2zm-6.9-3.3q-.3 1 0 2t1.4 1.5q.3.2.4.1t.2-.4q.1-.2.2-1.5T15 20q-1.3 0-2.4.1zm-2.3 2.2q.1.4-.5.6 2.3 2.5 4.7 4.2t5.4 2.7q3-.9 5.4-2.5t5.1-4.4q-.6-.3-.5-.6l.1-.2q-.3 0-.9-.1t-.9-.1q-.4 1.6-1.4 2.4-.9.6-1.4-.1l-.2-.2q-.1-.2-.3-1.1 0 .1-.1.2t-.1.1-.1.1-.2.1H24l-.2.1h-.5q-1.8.1-2.8-.2-.1.3-.2.5t-.4.2-.4.1-.6.1h-.1q-.1 0 0 0h-.1q-3.1.3-3.5-.7-.1 1.1-1 1-.8-.2-1.6-1-.2-.2-.3-.4-.3-.5-.5-1.2-1 .1-1.5.2v.2zm-1.4 11v-.6q-.3-1.2-.9-2.2t-1.2-1.3Q6 29 5 29.5t-1.8 1.4-.7 1.9q.6.9 1.7 1.6t2.1.7q.9.1 1.6-.4t1-1.4zm0-3q.4 1.1.5 2.1 3.4-2 6.9-3.1-1.8-.9-3.2-2.1T10 24.3q-.1.1-.5.3h-.1q-.1 0 0 .1.6.3.4.7-.2.4-1 .6-.1.2-.5.4V29q.4.6.6 1.3zm1.2 2.9q9.4.4 20.1 0-4.5-2.6-7.5-3.4-1.3.6-2.7.9-.2.1-.3 0-1.2-.3-2.3-.8-3.6 1-7.3 3.3zm20.8-.8q0-1 .5-2.1.2-.7.5-1.3v.1q.1-1.4.1-2.7-.3-.2-.6-.5-.7-.1-.9-.5-.2-.4.3-.7v-.2q-.3 0-.5-.2-3.5 3.3-6.7 5 3.5 1 7.3 3.1zm6.8.4q.1-1-.7-1.9t-1.8-1.4-1.8-.3q-.6.2-1.2 1.3t-.9 2.2v.6q.2.8.9 1.4t1.7.4q.9 0 2.1-.7t1.7-1.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconOptinMonster;
