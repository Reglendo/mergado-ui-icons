

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

class IconHtml5 extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--html5 ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m29.7 13.3l0.4-3.9h-19.8l1.1 11.9h13.7l-0.5 5.1-4.4 1.2-4.4-1.2-0.3-3.1h-3.9l0.5 6.2 8.1 2.2h0.1v0l8-2.2 1.1-12.1h-14.4l-0.3-4.1h15z m-25.2-10.4h31.4l-2.8 32.1-12.9 3.6-12.8-3.6z"></path></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconHtml5

