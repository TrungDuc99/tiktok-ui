import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountIem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Hoaa"
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ef378012e4776097afc3af911dbfb5c2~c5_300x300.webp?x-expires=1653670800&x-signature=%2BYZQnO%2Fop46cuXZHD%2FhP%2Bby5QjE%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
