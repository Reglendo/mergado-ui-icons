

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

class IconFileExcelO extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--file-excel-o`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m35.8 8.5q0.6 0.6 1 1.7t0.5 1.9v25.8q0 0.8-0.6 1.5t-1.6 0.6h-30q-0.9 0-1.5-0.6t-0.6-1.5v-35.8q0-0.8 0.6-1.5t1.5-0.6h20q0.9 0 2 0.4t1.7 1.1z m-9.9-5.5v8.4h8.4q-0.3-0.6-0.5-0.9l-7-7q-0.3-0.2-0.9-0.5z m8.5 34.1v-22.8h-9.3q-0.9 0-1.5-0.6t-0.6-1.6v-9.2h-17.1v34.2h28.5z m-21.8-5.2v2.4h6.2v-2.4h-1.6l2.3-3.6q0.1-0.1 0.2-0.3t0.2-0.3 0-0.1h0.1q0 0.1 0.1 0.2 0 0.1 0.1 0.2t0.1 0.1 0.2 0.2l2.4 3.6h-1.7v2.4h6.5v-2.4h-1.6l-4.2-6.1 4.3-6.3h1.5v-2.4h-6.2v2.4h1.6l-2.3 3.6q-0.1 0.1-0.2 0.3t-0.2 0.3l0 0.1h-0.1q0-0.1-0.1-0.2-0.1-0.3-0.4-0.5l-2.3-3.6h1.7v-2.4h-6.5v2.4h1.5l4.2 6.1-4.3 6.3h-1.5z"></path></g>
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

export default IconFileExcelO

