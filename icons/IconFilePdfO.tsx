

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconFilePdfO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--file-pdf-o`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-11.4-13.2q0.7 0.6 1.8 1.3 1.3-0.2 2.6-0.2 3.3 0 4 1.1 0.4 0.5 0 1.2 0 0 0 0l0 0v0.1q-0.2 0.8-1.6 0.8-1.1 0-2.6-0.4t-2.9-1.2q-4.9 0.5-8.7 1.8-3.4 5.9-5.4 5.9-0.4 0-0.7-0.2l-0.5-0.2q0-0.1-0.1-0.2-0.3-0.2-0.2-0.8 0.2-0.8 1.3-2t2.9-2.1q0.3-0.2 0.5 0.1 0.1 0 0.1 0.1 1.1-1.9 2.4-4.4 1.5-3.1 2.3-5.9-0.5-1.8-0.7-3.5t0.2-2.9q0.2-0.9 0.9-0.9h0.5q0.5 0 0.8 0.4 0.4 0.4 0.2 1.5-0.1 0.1-0.1 0.2 0 0 0 0.1v0.7q0 2.8-0.3 4.3 1.2 3.7 3.3 5.3z m-12.9 9.2q1.2-0.6 3.1-3.5-1.2 0.8-2 1.8t-1.1 1.7z m8.9-20.6q-0.4 1-0.1 3 0.1-0.2 0.2-1 0-0.1 0.1-0.9 0.1-0.1 0.1-0.2 0-0.1 0-0.1t0 0 0 0q0-0.5-0.3-0.8 0 0 0 0v0z m-2.8 14.8q3-1.2 6.4-1.8-0.1 0-0.3-0.2t-0.4-0.3q-1.7-1.5-2.8-4-0.6 2-1.9 4.4-0.7 1.3-1 1.9z m14.4-0.4q-0.5-0.5-3.1-0.5 1.7 0.6 2.8 0.6 0.3 0 0.4 0 0 0-0.1-0.1z"></path></g>
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

export default IconFilePdfO
