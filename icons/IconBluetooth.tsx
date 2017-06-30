

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

class IconBluetooth extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--bluetooth ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m21.8 23.5l3.3 3.3-3.4 3.3z m0-13.6l3.3 3.3-3.3 3.3z m-3 27.3l10.4-10.4-6.8-6.8 6.8-6.8-10.4-10.4v13.7l-5.6-5.7-2.1 2 7.1 7.2-7.1 7.2 2.1 2 5.6-5.6v13.6z m16.1-17.2q0 4.7-0.7 8.2t-2 5.7-3.1 3.6-4.1 2-4.9 0.5-4.9-0.5-4-2-3.1-3.6-2-5.7-0.7-8.2 0.7-8.2 2-5.7 3.1-3.6 4-2 4.9-0.5 4.9 0.5 4.1 2 3.1 3.6 2 5.7 0.7 8.2z"></path></g>
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

export default IconBluetooth

