
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

class IconBadgeFourth extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--badge-fourth ${p.addClass} ${p.className}`
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
                        <g><path d="M29.509 21.147l-.191.05 1.021 3.493c.114.568-.028 1.022-.426 1.363-.34.398-.766.512-1.277.342l-3.578-1.024-.852 3.578c-.155.466-.46.782-.896.965l4.656 6.721c.152.261.35.463.592.605.242.143.472.23.693.26a.802.802 0 0 0 .399-.045c.221-.092.344-.287.369-.582l.183-5.869 6.371 3.127c.33.146.618.169.862.066.11-.046.2-.123.267-.232.068-.15.093-.345.073-.58-.02-.235-.119-.478-.293-.73l-7.973-11.508zm-21.018 2.8l-5.974 8.625c-.175.253-.271.495-.291.731-.02.235.002.428.07.578.067.11.157.188.268.234.244.103.53.08.86-.066l6.372-3.127.184 5.87c.024.294.147.487.369.58.11.046.244.06.398.044.221-.03.452-.115.694-.258a1.66 1.66 0 0 0 .591-.607l5.088-7.344-.41.424c-.34.34-.768.454-1.28.34-.51-.114-.85-.454-1.02-1.022l-.852-3.578-3.578 1.024c-.512.17-.966.056-1.364-.342-.397-.34-.512-.795-.341-1.363l.216-.743z"></path><path d="M29.51 15.41l2.335 2.26q.527.452.301 1.205-.15.678-.828.828l-3.163.829.903 3.088q.151.753-.376 1.205-.452.527-1.13.301l-3.163-.904-.753 3.164q-.226.678-.904.904h-.302q-.527 0-.828-.302l-2.335-2.335-2.26 2.335q-.451.452-1.13.302-.677-.151-.903-.904l-.753-3.164-3.163.904q-.678.226-1.206-.301-.527-.452-.3-1.205l.903-3.088-3.163-.829q-.678-.15-.904-.828-.15-.753.376-1.205L9.1 15.41l-2.335-2.26q-.527-.451-.376-1.204.226-.678.904-.829l3.163-.828L9.551 7.2q-.226-.754.301-1.205.528-.528 1.206-.302l3.163.904.753-3.163q.226-.753.904-.904.678-.15 1.13.301l2.26 2.335 2.334-2.335q.452-.452 1.13-.301.678.15.904.904l.753 3.163 3.163-.904q.678-.226 1.13.302.527.451.376 1.205l-.903 3.088 3.163.828q.678.15.828.829.226.753-.3 1.205z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBadgeFourth;
