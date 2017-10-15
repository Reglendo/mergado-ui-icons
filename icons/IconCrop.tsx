

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

class IconCrop extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.name}--crop ${this.props.addClass}`

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
                    <g><path d="M13.9 28.6h13.3V15.3zm-1-1l13.3-13.3H12.9v13.3zm25.7 1.7v4.3q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-4.3q-.3 0-.5-.2t-.2-.5v-5H7.9q-.3 0-.5-.2t-.2-.5V14.3h-5q-.3 0-.5-.2t-.2-.5V9.3q0-.3.2-.5t.5-.2h5v-5q0-.3.2-.5t.5-.2h4.3q.3 0 .5.2t.2.5v5h19l5.5-5.5q.2-.2.5-.2t.5.2q.2.2.2.5t-.2.5l-5.5 5.5v19h5q.3 0 .5.2t.2.5z"></path></g>
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

export default IconCrop

