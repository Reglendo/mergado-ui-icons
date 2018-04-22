
import * as React from "react"
import shallowCompare from "shallow-compare"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconDataowl extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return shallowCompare(this,this.props,nextProps) }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon m--dataowl ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M11.38 38.853a15.317 15.317 0 0 0 13.543-8.11c.997-.315 1.944-.73 2.825-1.228 4.602-2.592 7.726-7.527 7.726-13.194 0-.283-.033-.565-.05-.848a18.328 18.328 0 0 0-.133-1.362 15.244 15.244 0 0 0-2.26-5.998l.018-.017c2.16 3.19 3.44 7.129 3.44 11.383 0 10.735-8.16 19.441-18.246 19.441v-.066H11.38z" fill="#a48a7b"></path><path d="M24.923 30.744a15.316 15.316 0 0 1-13.543 8.108H5.182V16.32c0 5.667 3.124 10.602 7.726 13.195a15.104 15.104 0 0 0 5.866 1.876c.515.05 1.03.066 1.563.066.514 0 1.03-.016 1.545-.066a14.107 14.107 0 0 0 3.041-.647" fill="#a48a7b"></path><path d="M27.897 18.547a2.844 2.844 0 0 1-2.858-2.841 2.858 2.858 0 0 1 2.858-2.859 2.855 2.855 0 0 1 2.841 2.859 2.84 2.84 0 0 1-2.84 2.841m-15.122-5.7a2.858 2.858 0 0 0-2.858 2.859c0 1.578 1.28 2.84 2.858 2.84a2.84 2.84 0 0 0 2.842-2.84 2.855 2.855 0 0 0-2.842-2.859zm0-4.702c.93 0 1.828.167 2.659.499a15.53 15.53 0 0 0-2.809-.5h.15z" fill="#fff"></path><path d="M5.365 14.194c1.489-7.266 7.328-13.011 14.97-13.011 5.319 0 10.004 2.758 12.697 6.93a15.225 15.225 0 0 1 2.26 5.998c-.748-3.407-3.773-5.965-7.395-5.965-2.758 0-5.73 2.134-7.027 4.345-1.695-1.479-3.193-3.249-5.435-3.847a7.127 7.127 0 0 0-2.66-.498h-.149c-3.589.066-6.563 2.641-7.261 6.048z" fill="#a48a7b"></path><path d="M35.425 15.473a17.809 17.809 0 0 0-.133-1.362c-.747-3.406-3.772-5.965-7.394-5.965a7.505 7.505 0 0 0-6.48 3.688 7.328 7.328 0 0 0-1.08 3.872 7.536 7.536 0 0 0-4.902-7.062 15.452 15.452 0 0 0-2.808-.498c-3.589.066-6.563 2.641-7.261 6.048 0 .034-.018.066-.018.116a8.9 8.9 0 0 0-.116 1.163c-.017.068-.017.15-.017.233-.016.216-.033.416-.033.615 0 5.667 3.123 10.601 7.726 13.195a15.104 15.104 0 0 0 5.866 1.876c.515.05 1.03.066 1.563.066.514 0 1.03-.016 1.545-.066a14.118 14.118 0 0 0 3.041-.648 14.86 14.86 0 0 0 2.825-1.23c4.603-2.59 7.726-7.526 7.726-13.193 0-.283-.033-.566-.05-.848z" fill="#e8ddcd"></path><path d="M12.776 18.547a2.843 2.843 0 0 1-2.858-2.841 2.858 2.858 0 0 1 2.858-2.859c1.561 0 2.84 1.28 2.84 2.859a2.838 2.838 0 0 1-2.84 2.84zm15.121 0a2.843 2.843 0 0 1-2.858-2.841 2.858 2.858 0 0 1 2.858-2.859 2.855 2.855 0 0 1 2.842 2.859 2.84 2.84 0 0 1-2.842 2.84z" fill="#e8ddcd"></path><path d="M12.776 19.628c-2.173 0-3.938-1.759-3.938-3.922a3.942 3.942 0 0 1 3.938-3.938c2.163 0 3.92 1.767 3.92 3.938a3.925 3.925 0 0 1-3.92 3.922m0-5.699a1.78 1.78 0 0 0-1.78 1.777c0 .97.799 1.76 1.78 1.76.971 0 1.76-.791 1.76-1.76a1.77 1.77 0 0 0-1.76-1.777m15.121 5.699c-2.172 0-3.938-1.759-3.938-3.922a3.942 3.942 0 0 1 3.938-3.938c2.163 0 3.922 1.767 3.922 3.938a3.926 3.926 0 0 1-3.922 3.922m0-5.699c-.98 0-1.778.796-1.778 1.777 0 .97.798 1.76 1.778 1.76.972 0 1.761-.791 1.761-1.76a1.77 1.77 0 0 0-1.76-1.777" fill="#332221"></path><path d="M33.943 7.49a1.012 1.012 0 0 0-.152-.177C30.775 2.796 25.768.102 20.337.102c-8.032 0-14.928 5.994-16.041 13.941v.003l-.028.17c-.072.415-.11.796-.115 1.159-.016.117-.017.222-.018.303l-.002.014a8.011 8.011 0 0 0-.031.628v23.613h13.78c.113.04.234.067.36.067 10.656 0 19.326-9.207 19.326-20.523 0-4.34-1.253-8.485-3.625-11.988zM20.337 2.262A13.97 13.97 0 0 1 31.569 7.9a8.527 8.527 0 0 0-3.672-.836c-3.043 0-5.884 1.618-7.4 4.201-.057.092-.108.189-.161.284a8.578 8.578 0 0 0-4.5-3.908 8.196 8.196 0 0 0-3.06-.576h-.17a8.524 8.524 0 0 0-3.47.815c2.586-3.42 6.681-5.618 11.2-5.618zm-7.561 6.964c.8 0 1.56.141 2.282.43a6.475 6.475 0 0 1 4.198 6.046v5.603a1.08 1.08 0 1 0 2.16 0v-5.6a6.3 6.3 0 0 1 .931-3.325c1.142-1.946 3.268-3.154 5.55-3.154 3.015 0 5.678 2.143 6.329 5.074.058.41.09.823.12 1.233l.02.312c.013.159.027.317.027.475a14.09 14.09 0 0 1-9.777 13.387l-.025.01h-.006c-.946.312-1.89.512-2.81.6a15.12 15.12 0 0 1-2.893 0 13.988 13.988 0 0 1-5.445-1.744A14.09 14.09 0 0 1 6.26 16.32c0-.151.013-.303.024-.463l.006-.07c.003-.038 0-.075-.003-.113.01-.052.02-.105.022-.158.013-.331.04-.65.093-.968l.007-.045.033-.196c.647-2.897 3.24-5.028 6.334-5.081zM11.38 37.772H6.262V24.383a16.256 16.256 0 0 0 6.119 6.072 16.118 16.118 0 0 0 6.29 2.01c.55.057 1.099.073 1.667.073.548 0 1.1-.017 1.646-.07.185-.019.374-.046.56-.07a14.236 14.236 0 0 1-11.164 5.374zm8.132.01a16.326 16.326 0 0 0 6.145-6.15 15.83 15.83 0 0 0 2.62-1.177 16.26 16.26 0 0 0 6.806-7.42c-1.475 7.995-7.814 14.138-15.57 14.748z" fill="#332221"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconDataowl;
