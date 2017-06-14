

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

class IconFolderOpenO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--folder-open-o ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37 20.7q0-0.7-1.1-0.7h-22.6q-0.8 0-1.8 0.4t-1.5 1.1l-6.1 7.6q-0.3 0.5-0.3 0.8 0 0.7 1.1 0.7h22.5q0.9 0 1.8-0.4t1.5-1.1l6.1-7.6q0.4-0.4 0.4-0.8z m-23.7-3.4h15.9v-3.3q0-0.8-0.5-1.4t-1.5-0.6h-11.9q-0.8 0-1.4-0.6t-0.6-1.4v-1.3q0-0.8-0.6-1.4t-1.4-0.6h-6.6q-0.9 0-1.5 0.6t-0.5 1.4v17.7l5.3-6.5q0.9-1.1 2.4-1.8t2.9-0.8z m26.3 3.4q0 1.3-0.9 2.5l-6.1 7.6q-0.9 1.1-2.5 1.8t-2.9 0.7h-22.5q-2 0-3.3-1.4t-1.4-3.3v-19.9q0-1.9 1.4-3.3t3.3-1.3h6.6q1.9 0 3.3 1.3t1.3 3.3v0.7h11.3q2 0 3.3 1.3t1.4 3.3v3.3h4q1.1 0 2 0.6t1.4 1.4q0.3 0.7 0.3 1.4z"></path></g>
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

export default IconFolderOpenO

