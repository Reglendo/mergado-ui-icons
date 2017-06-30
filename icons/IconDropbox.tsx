

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

class IconDropbox extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--dropbox ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m9 15.8l11 6.8-7.6 6.3-11-7.1z m22 12.4v2.4l-11 6.5v0l0 0 0 0v0l-10.9-6.5v-2.4l3.3 2.1 7.6-6.3v-0.1l0 0 0 0v0.1l7.7 6.3z m-18.6-25.6l7.6 6.4-11 6.8-7.6-6z m18.6 13.2l7.6 6-10.9 7.2-7.7-6.4z m-3.3-13.2l10.9 7.2-7.6 6-11-6.8z"></path></g>
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

export default IconDropbox

