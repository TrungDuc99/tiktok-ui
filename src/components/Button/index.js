import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    disabled = false,
    text = false,
    primary = false,
    small = false,
    large = false,
    outline = false,
    rouded = false,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    console.log(props);
    if (disabled) {
        Object.keys(props).forEach((key) => {
            console.log(key);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        disabled,
        small,
        large,
        text,
        rouded,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
