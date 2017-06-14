

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

class IconArchive extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--archive ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m24.3 18.6q0-0.6-0.4-1t-1-0.5h-5.8q-0.5 0-1 0.5t-0.4 1 0.4 1 1 0.4h5.8q0.5 0 1-0.4t0.4-1z m12.8-4.3v21.4q0 0.6-0.4 1t-1 0.4h-31.4q-0.6 0-1-0.4t-0.4-1v-21.4q0-0.6 0.4-1t1-0.4h31.4q0.6 0 1 0.4t0.4 1z m1.5-10v5.7q0 0.6-0.5 1t-1 0.4h-34.2q-0.6 0-1-0.4t-0.5-1v-5.7q0-0.6 0.5-1t1-0.4h34.2q0.6 0 1 0.4t0.5 1z"></path></g>
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

export default IconArchive

