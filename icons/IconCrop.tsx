

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

class IconCrop extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--crop ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.9 28.6h13.3v-13.3z m-1-1l13.3-13.3h-13.3v13.3z m25.7 1.7v4.3q0 0.3-0.2 0.5t-0.5 0.2h-5v5q0 0.3-0.2 0.5t-0.5 0.2h-4.3q-0.3 0-0.5-0.2t-0.2-0.5v-5h-19.3q-0.3 0-0.5-0.2t-0.2-0.5v-19.3h-5q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h5v-5q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v5h19l5.5-5.5q0.2-0.2 0.5-0.2t0.5 0.2q0.2 0.2 0.2 0.5t-0.2 0.5l-5.5 5.5v19h5q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconCrop

