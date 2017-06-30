

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

class IconCube extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--cube ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.5 36.4l14.3-7.8v-14.2l-14.3 5.2v16.8z m-1.4-19.3l15.5-5.7-15.5-5.7-15.6 5.7z m18.5-5.7v17.2q0 0.8-0.4 1.4t-1.1 1.1l-15.7 8.5q-0.6 0.4-1.3 0.4t-1.4-0.4l-15.7-8.5q-0.7-0.4-1.1-1.1t-0.4-1.4v-17.2q0-0.9 0.5-1.6t1.4-1.1l15.7-5.7q0.5-0.1 1-0.1t1 0.1l15.7 5.8q0.8 0.3 1.3 1t0.5 1.6z"></path></g>
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

export default IconCube

