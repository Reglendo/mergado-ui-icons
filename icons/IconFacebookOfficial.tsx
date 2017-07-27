

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconFacebookOfficial extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--facebook-official ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m35.4 2.9q0.8 0 1.3 0.5t0.6 1.4v30.4q0 0.8-0.6 1.4t-1.3 0.5h-8.7v-13.2h4.4l0.7-5.2h-5.1v-3.3q0-1.3 0.5-1.9t2-0.6l2.7 0v-4.7q-1.4-0.2-3.9-0.2-3.1 0-4.9 1.8t-1.8 5.1v3.8h-4.5v5.2h4.5v13.2h-16.4q-0.8 0-1.3-0.5t-0.6-1.4v-30.4q0-0.8 0.6-1.4t1.3-0.5h30.5z"></path></g>
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

export default IconFacebookOfficial

