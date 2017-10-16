

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
export interface State {
}

class IconHintHelp extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--hint-help ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0zm0 35.11a2.575 2.575 0 1 1 0-5.15 2.575 2.575 0 0 1 0 5.15zm4.54-12.295c-1.05.577-2.04 1.72-2.04 2.185a2.501 2.501 0 0 1-5 0c0-3.175 2.91-5.62 4.63-6.565C24.66 17.04 25 15.52 25 14.22c0-3.672-3.132-4.22-5-4.22-2.408 0-5 1.58-5 5.052a2.5 2.5 0 0 1-5 0C10 8.522 15.153 5 20 5c4.978 0 10 2.85 10 9.22 0 3.707-1.835 6.602-5.46 8.595z"></path></g>
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

export default IconHintHelp

