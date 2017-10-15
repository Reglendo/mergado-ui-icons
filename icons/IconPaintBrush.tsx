

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

class IconPaintBrush extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--paint-brush ${this.props.addClass}`

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
                    <g><path d="M36 0q1.6 0 2.8 1T40 3.6Q40 5 39 7q-7.5 14-10.4 16.8-2.2 2-4.9 2-2.8 0-4.8-2t-2-4.9q0-2.9 2-4.8L33.1 1.2Q34.5 0 36 0zM15.8 23.1q.8 1.7 2.3 2.9t3.4 1.7v1.6q.1 4.7-2.9 7.7t-7.8 3Q8.1 40 6 39t-3.4-2.9-2-4.1-.6-4.9q.2.1.9.7t1.4 1 1.3.8 1 .4q1 0 1.3-.8.5-1.5 1.3-2.6t1.5-1.7 2-1 2.3-.6 2.8-.2z"></path></g>
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

export default IconPaintBrush

