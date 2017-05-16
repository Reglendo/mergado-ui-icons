

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

class IconBinoculars extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--binoculars`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m15.7 7.1v17.2q0 0.6-0.4 1t-1 0.4v12.9q0 0.5-0.4 1t-1 0.4h-11.5q-0.6 0-1-0.4t-0.4-1v-11.5l5.6-19.4q0.1-0.6 0.7-0.6h9.4z m7.2 0v15.8h-5.8v-15.8h5.8z m17.1 20v11.5q0 0.6-0.4 1t-1 0.4h-11.5q-0.5 0-1-0.4t-0.4-1v-12.9q-0.6 0-1-0.4t-0.4-1v-17.2h9.5q0.5 0 0.6 0.6z m-23.6-26.4v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z m15 0v5h-7.8v-5q0-0.3 0.2-0.5t0.5-0.2h6.4q0.3 0 0.5 0.2t0.2 0.5z"></path></g>
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

export default IconBinoculars

