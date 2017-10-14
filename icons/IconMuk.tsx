

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
}
export interface State {
}

class IconMuk extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40.000003 39.999999",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="M0 0l20 20L0 40z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#6858e8"></path><path d="M0 40l20-20 20 20z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#29235c"></path><path d="M40 40L20 20 40 0z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#2d95d3"></path><path d="M40 0L20 20 0 0z" style={{"isolation":"auto","mixBlendMode":"normal"}} color="#000" overflow="visible" fill="#fff"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconMuk

