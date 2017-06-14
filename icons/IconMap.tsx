

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

class IconMap extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--map ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m11.4 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.3 0.6l-10.7 5.7q-0.2 0.1-0.4 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.4-0.6l10.7-5.7q0.2-0.1 0.3-0.1z m27.9 0q0.3 0 0.5 0.2t0.2 0.5v32.9q0 0.4-0.4 0.6l-10.7 5.7q-0.1 0.1-0.3 0.1-0.3 0-0.5-0.2t-0.2-0.5v-32.9q0-0.4 0.3-0.6l10.8-5.7q0.1-0.1 0.3-0.1z m-25 0q0.2 0 0.3 0.1l11.4 5.7q0.4 0.2 0.4 0.6v32.9q0 0.3-0.2 0.5t-0.5 0.2q-0.2 0-0.3-0.1l-11.4-5.7q-0.4-0.2-0.4-0.6v-32.9q0-0.3 0.2-0.5t0.5-0.2z"></path></g>
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

export default IconMap

