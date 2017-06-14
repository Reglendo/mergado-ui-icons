

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

class IconBehanceSquare extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--behance-square ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z m-16.8 8.1h-8.2v17.6h8.5q2.6 0 4.4-1.3t1.8-3.8q0-3.5-3.2-4.4 2.4-1.2 2.4-3.7 0-1.3-0.5-2.2t-1.2-1.3-1.8-0.7-2.2-0.2z m-0.5 7.1h-3.9v-4.1h3.7q2.6 0 2.6 2 0 2.1-2.4 2.1z m0.2 7.5h-4.1v-4.8h4.2q2.8 0 2.8 2.5 0 2.3-2.9 2.3z m14.6 0.7q-1.6 0-2.4-0.8t-0.8-2.4h9.2q0-0.2 0-0.7 0-2.9-1.6-4.9t-4.6-2q-2.8 0-4.7 2t-1.8 4.8q0 3 1.8 4.8t4.7 1.8q4.6 0 6-4.2h-3.1q-0.2 0.7-1.1 1.2t-1.6 0.4z m-0.3-8.1q2.6 0 2.8 2.7h-5.7q0.1-1.3 0.9-2t2-0.7z m-3.6-6h7.1v1.8h-7.1v-1.8z"></path></g>
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

export default IconBehanceSquare

