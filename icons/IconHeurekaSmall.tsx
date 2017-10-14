

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
    color?: string
    textFirst?: boolean
}
export interface State {
}

class IconHeurekaSmall extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40.000001 40.000003",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><g   id="layer1" transform="translate(-250.03948,-682.6105)">    <path d="m 257.53705,699.71978 c 0,-6.77776 5.51373,-12.29148 12.29149,-12.29148 2.47707,0 4.78265,0.7392 6.71419,2.00472 l -7.06827,11.34974 -2.9132,-3.84756 c -0.43687,-0.57584 -1.1029,-0.907 -1.82584,-0.907 -0.50192,0 -0.9787,0.16114 -1.37935,0.46496 -1.0068,0.76138 -1.20564,2.19839 -0.44353,3.20593 l 4.92089,6.49908 c 0.43169,0.56697 1.1125,0.90626 1.82435,0.90626 0.0355,0 0.0702,0 0.10497,-0.003 0.75399,-0.0348 1.44071,-0.43613 1.83766,-1.07629 l 8.30422,-13.33228 c 1.39488,1.99289 2.2154,4.416 2.2154,7.02687 0,6.77851 -5.51373,12.29297 -12.29149,12.29297 -6.77776,0 -12.29149,-5.51446 -12.29149,-12.29297 m 31.44131,17.84883 -6.42516,-6.42591 0.008,-0.007 c 2.71953,-3.03 4.37757,-7.03279 4.37757,-11.41627 0,-9.43372 -7.67516,-17.10888 -17.11036,-17.10888 -9.43446,0 -17.11036,7.67516 -17.11036,17.10888 0,9.43594 7.6759,17.11036 17.11036,17.11036 2.90581,0 5.63643,-0.73846 8.03441,-2.02172 l 6.93669,6.93817 c 1.15316,1.15242 3.02556,1.15242 4.17946,0 1.15168,-1.15316 1.15168,-3.02556 -5.9e-4,-4.17798" style={{"fill":"#ff7b00","fillOpacity":1,"fillRule":"nonzero","stroke":"none"}} id="path3551" ></path>  </g></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconHeurekaSmall

