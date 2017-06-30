

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

class IconInternetExplorer extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--internet-explorer ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m40 20.9q0 1.3-0.2 2.3h-25.6q0 3.3 2.4 5.5t5.7 2.2q2.3 0 4.2-1t3-3h9.5q-1.3 3.6-3.8 6.3t-6 4.2-7.2 1.5q-4.1 0-7.9-1.8-5.1 2.5-8.8 2.5-5.3 0-5.3-5.8 0-2.6 1-6.2 0.4-1.3 2.4-5.1 4.5-8 10.6-13.5-4.1 1.8-9.5 7.9 1.4-6.1 6.3-10t11.2-4q0.7 0 1 0.1 5.7-2.6 9.7-2.6 1.4 0 2.6 0.2t2.1 0.9 1.5 1.8 0.5 2.5q0 2.6-1.7 6.4 2.3 4.1 2.3 8.7z m-1.6-14.3q0-1.8-1.1-2.9t-3.1-1.1q-2.4 0-5.7 1.6 2.7 1 5 2.9t3.8 4.3q1.1-3 1.1-4.8z m-35.5 27.6q0 2 1 3t3 1q2.6 0 6-1.8-2.7-1.6-4.8-4.1t-3.1-5.5q-2.1 4.6-2.1 7.4z m11.2-15.9h16.3q-0.2-3.1-2.6-5.3t-5.6-2.1q-3.2 0-5.6 2.1t-2.5 5.3z"></path></g>
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

export default IconInternetExplorer

