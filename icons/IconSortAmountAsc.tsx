

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

class IconSortAmountAsc extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--sort-amount-asc ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m16 31.8q0 0.3-0.2 0.6l-6.9 6.9q-0.3 0.2-0.5 0.2-0.3 0-0.5-0.2l-7-7q-0.3-0.3-0.2-0.7 0.2-0.4 0.7-0.4h4.2v-30q0-0.3 0.2-0.5t0.5-0.2h4.2q0.3 0 0.5 0.2t0.2 0.5v30h4.1q0.3 0 0.5 0.1t0.2 0.5z m23 2.8v4.2q0 0.3-0.2 0.5t-0.5 0.2h-18.1q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h18.1q0.3 0 0.5 0.2t0.2 0.5z m-4.2-11.1v4.2q0 0.3-0.2 0.5t-0.5 0.2h-13.9q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h13.9q0.4 0 0.5 0.2t0.2 0.5z m-4.1-11.2v4.2q0 0.3-0.2 0.5t-0.5 0.2h-9.8q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h9.8q0.3 0 0.5 0.2t0.2 0.5z m-4.2-11.1v4.2q0 0.3-0.2 0.5t-0.5 0.2h-5.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.2q0-0.3 0.2-0.5t0.5-0.2h5.6q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconSortAmountAsc

