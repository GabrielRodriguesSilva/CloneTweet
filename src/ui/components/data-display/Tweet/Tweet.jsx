import { DateService } from '../../../../data/services/DateService';
import styles from './Tweet.module.css';

export default function Tweet({ tweet }) {
    const {user} = tweet;

    return <div className={styles['tweet-container']}>

        <img src={user.picture} className={styles['avatar']} alt="Imagem de Avatar do Usuário do Tweet" />

        <div className={styles['user']}>
            <span className={styles['user-name']}>{user.name}</span>{' '}
            <span className={styles['user-username']}> @{user.username}</span>{' '}
            <span className={styles['date']}>- {DateService.relativeTime(tweet.date)}</span>
        </div>

        <div className={styles['tweet-text']}>{tweet.text}</div>

    </div>
}