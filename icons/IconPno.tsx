

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

class IconPno extends React.Component<Props, State> {

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
                    <g><path d="M2.913 14.525h4.68q2.087 0 3.2.93 1.121.923 1.121 2.637 0 1.721-1.12 2.651-1.114.923-3.201.923h-1.86v3.794h-2.82V14.525zm2.82 2.044v3.054h1.56q.82 0 1.267-.396.446-.403.446-1.135t-.446-1.128q-.447-.395-1.268-.395h-1.56zm8.166-2.044h3.15l3.976 7.5v-7.5H23.7V25.46h-3.15l-3.977-7.5v7.5H13.9V14.525zm17.563 1.845q-1.289 0-2 .953-.71.952-.71 2.68 0 1.722.71 2.674.711.952 2 .952 1.297 0 2.007-.952.71-.952.71-2.673 0-1.729-.71-2.681t-2.007-.952zm0-2.043q2.637 0 4.131 1.51 1.494 1.508 1.494 4.167 0 2.651-1.494 4.16-1.494 1.509-4.13 1.509-2.63 0-4.131-1.51-1.495-1.508-1.495-4.16 0-2.658 1.495-4.167 1.501-1.509 4.13-1.509z"></path></g>
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

export default IconPno

