

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

class IconIndent extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--indent ${this.props.addClass}`

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
                    <g><path d="M7.9 18.6q0 .3-.2.5l-6.5 6.4q-.2.2-.5.2t-.5-.2T0 25V12.1q0-.2.2-.5t.5-.2q.3 0 .5.2l6.5 6.5q.2.2.2.5zM40 29.3v4.3q0 .3-.2.5t-.5.2H.7q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5zm0-8.6V25q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.3.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.6v4.3q0 .3-.2.5t-.5.2H15q-.3 0-.5-.2t-.2-.5v-4.3q0-.2.2-.5t.5-.2h24.3q.3 0 .5.2t.2.5zm0-8.5v4.3q0 .2-.2.5t-.5.2H.7q-.3 0-.5-.2T0 7.9V3.6q0-.3.2-.5t.5-.2h38.6q.3 0 .5.2t.2.5z"></path></g>
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

export default IconIndent

