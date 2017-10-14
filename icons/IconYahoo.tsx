

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

class IconYahoo extends React.Component<Props, State> {

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
                    <g><path d="M22.2 21.4l.3 15.7q-1.4-.2-2.4-.2-.9 0-2.3.2l.3-15.7q-.9-1.6-3.8-6.6T9.5 6.4 5.4 0q1.3.3 2.4.3 1 0 2.5-.3 1.4 2.5 3 5.1t3.7 6.2 3.1 5.1q.8-1.4 2.5-4t2.6-4.2 2.3-4T29.9 0q1.2.3 2.4.3 1.3 0 2.6-.3-.7.9-1.4 2t-1.1 1.7-1.3 2.2-1 1.8q-3.3 5.6-7.9 13.7z"></path></g>
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

export default IconYahoo

