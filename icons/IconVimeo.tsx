

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

class IconVimeo extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
    }

    render() {
        let className = `${this.name} ${this.name}--vimeo ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path d="m38.1 11.6q-0.2 5.2-7.4 14.5-7.4 9.6-12.5 9.6-3.2 0-5.4-5.9-0.9-3.5-2.9-10.7-1.6-5.9-3.5-5.9-0.4 0-2.9 1.7l-1.7-2.2q0.6-0.4 2.4-2.1t2.9-2.6q3.5-3.1 5.4-3.2 2.1-0.2 3.4 1.2t1.8 4.5q1 6.4 1.5 8.4 1.2 5.5 2.7 5.5 1.1 0 3.4-3.6 2.3-3.6 2.5-5.5 0.3-3.1-2.5-3.1-1.2 0-2.7 0.6 2.7-8.8 10.3-8.5 5.6 0.2 5.2 7.3z"></path></g>
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

export default IconVimeo

