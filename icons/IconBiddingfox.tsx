
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

class IconBiddingfox extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--biddingfox ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M39.943 18.866c-8.83.9-15.948 7.549-17.582 16.142a20.044 20.044 0 0 0-.364 3.755c0 .382.036.756.058 1.132a19.838 19.838 0 0 0 7.738-2.468C35.882 34 40 27.485 40 20.001c0-.383-.036-.756-.057-1.135M17.64 35.008C16.005 26.415 8.886 19.766.057 18.866c-.022.379-.058.752-.058 1.135C0 27.485 4.118 34 10.206 37.428a19.856 19.856 0 0 0 7.74 2.467c.022-.376.058-.75.058-1.132 0-1.286-.134-2.537-.365-3.755" fill="#e8ddcd"></path><path d="M22.36 35.008a20.41 20.41 0 0 0-2.36-.15c-.8 0-1.586.06-2.36.15.23 1.218.364 2.47.364 3.755 0 .382-.036.756-.058 1.132a20.388 20.388 0 0 0 4.109 0c-.022-.376-.058-.75-.058-1.132 0-1.286.133-2.537.364-3.755" fill="#333"></path><path d="M40 0l-9.574 2.943A19.854 19.854 0 0 0 20 0 19.86 19.86 0 0 0 9.575 2.942L0 0l2.947 9.59a19.92 19.92 0 0 0-2.89 9.276c8.83.9 15.948 7.55 17.581 16.142.776-.09 1.56-.15 2.36-.15.8 0 1.586.06 2.362.15 1.634-8.593 8.753-15.242 17.582-16.142a19.933 19.933 0 0 0-2.89-9.277L40 0z" fill="#e30613"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBiddingfox;
